// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    let uData = {
        tsActive: true
    };

    if (uData.tsActive) {
        let m3uString = await generateM3u(uData);
        res.status(200).send(m3uString);
    }
    else
        res.status(409).json({ error: "Tata Sky Deactivated" });
}


import { all } from "axios";
import fetch, { Headers } from "cross-fetch";

const getUserChanDetails = async () => {
    let hmacValue;
    let obj = { err: null, list: [] };

    try {
        const response = await fetch("https://tplayapi.code-crafters.app/321codecrafters/hmac.json");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        hmacValue = data.data.hmac.hdtl.value;
    } catch (error) {
        console.error('Error fetching and rearranging HMAC data:', error);
        obj.err = error;
        return obj;
    }

        try {
            const response = await fetch("https://tplayapi.code-crafters.app/321codecrafters/fetcher.json");
            const cData = await response.json();

            const response1 = await fetch("https://raw.githubusercontent.com/AjitGE/tataChannelsDetails/main/allChannels.json");
            const newChannelData = await response1.json();

            if (cData && cData.data && Array.isArray(cData.data.channels) && Array.isArray(newChannelData)) {
                const channels = cData.data.channels;
                for(let i=0; i<channels.length;i++) {
                    let rearrangedChannel = {
                        id: channels[i].id,
                        name: channels[i].name,
                        tvg_id: channels[i].tvg_id,
                        group_title: newChannelData[i].genres[0],
                        tvg_logo: newChannelData[i].logo_url,
                        stream_url: channels[i].manifest_url,
                        license_url: channels[i].license_url,
                        stream_headers: channels[i].manifest_headers ? (channels[i].manifest_headers['User-Agent'] || JSON.stringify(channels[i].manifest_headers)) : null,
                        drm: channels[i].drm,
                        is_mpd: channels[i].is_mpd,
                        kid_in_mpd: channels[i].kid_in_mpd,
                        hmac_required: channels[i].hmac_required,
                        key_extracted: channels[i].key_extracted,
                        pssh: channels[i].pssh,
                        clearkey: channels[i].clearkeys ? JSON.stringify(channels[i].clearkeys[0].base64) : null,
                        hma: hmacValue
                    };
                    obj.list.push(rearrangedChannel);
                }
            } else {
                console.error('Invalid data structure or channels is not an array:', cData);
                obj.err = 'Invalid data structure';
                return obj;
            }
        } catch (error) {
            console.error('Fetch error:', error);
            obj.err = error;
            return obj;
        }


    return obj;
};

const generateM3u = async (ud) => {
    let errs = [];
    let m3uStr = ''; // Declare m3uStr outside of the block
    let userChanDetails = await getUserChanDetails();
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/[-:]/g, "").slice(0, 8)+"T060000";
    console.log(formattedDate)
    currentDate.setDate(currentDate.getDate() - 7);
    const todayMinus7formattedDate = currentDate.toISOString().replace(/[-:]/g, "").slice(0, 8)+"TO60000";
    console.log(todayMinus7formattedDate)

    let catcUpParam= `begin=${formattedDate}&end=${todayMinus7formattedDate}`;
     let catchupTime= "begin={utc:{Y}{m}{d}T{H}{M}{S}}&end=${end:{Y}{m}{d}T{H}{M}{S}}"

    console.log(catcUpParam);

        if (userChanDetails.err === null) {
            let chansList = userChanDetails.list;

            m3uStr = '#EXTM3U x-tvg-url="https://github.com/mitthu786/tvepg/raw/main/tataplay/epg.xml.gz"\n\n';

            for (let i = 0; i < chansList.length; i++) {
                m3uStr += '#EXTINF:-1 tvg-id="ts' + chansList[i].id.toString() + '" ';
                m3uStr += 'group-title=\"' + (chansList[i].group_title) + '\", tvg-logo=\"'+ (chansList[i].tvg_logo) + '\", ' + chansList[i].name + '\n';
                // m3uStr += 'catchup="shift" catchup-days="3"\n'
                m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey\n';
                m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + chansList[i].clearkey + '\n';
                m3uStr += '#EXTVLCOPT:http-user-agent=' + chansList[i].stream_headers + '\n';
               // m3uStr += 'catchup="default" '
                // if(chansList[i].stream_url.includes("bpweb")){
                //     let catup_stream_url = chansList[i].stream_url.split(".")[0].replace("bpweb","bpprod")+"catchup"
                //     const splitString=chansList[i].stream_url.split(".")
                //         for(let i=1; i<splitString.length;i++){
                //            catup_stream_url  = catup_stream_url+ "." +splitString[i]

                //         }
                //         m3uStr += 'catchup-source="'+catup_stream_url + '?'+catchupTime+ '"\n';
                //     }
                //     else {
                //         m3uStr += 'catchup-source="'+chansList[i].stream_url + '?'+catchupTime+'"\n';
                //     }
                //m3uStr+=  'catchup-days="7" catchup-correction="+5.30"\n'
                m3uStr += chansList[i].stream_url+'|Cookie='+chansList[i].hma+'\n\n'
            }

            console.log('all done!');
        } else {
            m3uStr = userChanDetails.err ? userChanDetails.err.toString() : "Could not get channels. Try again later.";
        }
    return m3uStr;
}
