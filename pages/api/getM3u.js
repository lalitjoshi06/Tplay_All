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
        hmacValue = data.data.hmac.hdnea.value;
    } catch (error) {
        console.error('Error fetching and rearranging HMAC data:', error);
        obj.err = error;
        return obj;
    }

        try {
            const response = await fetch("https://tplayapi.code-crafters.app/321codecrafters/fetcher.json");
            const cData = await response.json();

            if (cData && cData.data && Array.isArray(cData.data.channels)) {
                const flatChannels = cData.data.channels.flat();
                flatChannels.forEach(channel => {
                    let firstGenre = channel.genres[0]==="HD" ? channel.genres[1]:channel.genres[0];
                    let rearrangedChannel = {
                        id: channel.id,
                        name: channel.name,
                        tvg_id: channel.tvg_id,
                        group_title: firstGenre,
                        tvg_logo: channel.logo_url,
                        stream_url: channel.manifest_url,
                        license_url: channel.license_url,
                        stream_headers: channel.manifest_headers ? (channel.manifest_headers['User-Agent'] || JSON.stringify(channel.manifest_headers)) : null,
                        drm: channel.drm,
                        is_mpd: channel.is_mpd,
                        kid_in_mpd: channel.kid_in_mpd,
                        hmac_required: channel.hmac_required,
                        key_extracted: channel.key_extracted,
                        pssh: channel.pssh,
                        clearkey: channel.clearkeys ? JSON.stringify(channel.clearkeys[0].base64) : null,
                        hma: hmacValue
                    };
                    obj.list.push(rearrangedChannel);
                });
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

    let catcUpParam= "begin="+formattedDate+"&"+"end="+todayMinus7formattedDate;

    console.log(catcUpParam);

        if (userChanDetails.err === null) {
            let chansList = userChanDetails.list;

            m3uStr = '#EXTM3U x-tvg-url="https://github.com/mitthu786/tvepg/raw/main/tataplay/epg.xml.gz"\n\n';

            for (let i = 0; i < chansList.length; i++) {
                m3uStr += '#EXTINF:-1 tvg-id="ts' + chansList[i].id.toString() + '" ';
                m3uStr += 'group-title=\"' + (chansList[i].group_title) + '\", tvg-logo=\"'+ (chansList[i].tvg_logo) + '\", ' + chansList[i].name + '\n';
                m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey\n';
                m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + chansList[i].clearkey + '\n';
                m3uStr += '#EXTVLCOPT:http-user-agent=' + chansList[i].stream_headers + '\n';
                m3uStr +='catchup="default"'+'\n';
                if(chansList[i].stream_url.includes("bpweb")){
                let catup_stream_url = chansList[i].stream_url.split(".")[0].replace("bpweb","bpprod")+"catchup"
                const splitString=chansList[i].stream_url.split(".")
                    for(let i=1; i<splitString.length;i++){
                       catup_stream_url  = catup_stream_url+ "." +splitString[i]

                    }
                    m3uStr += 'catchup-source="'+catup_stream_url + '?'+catcUpParam+ '"\n';
                }
                else {
                    m3uStr += 'catchup-source="'+chansList[i].stream_url + '?'+catcUpParam+'"\n';
                }
                m3uStr += chansList[i].stream_url+'?'+chansList[i].hmac+'\n\n'
            }

            console.log('all done!');
        } else {
            m3uStr = userChanDetails.err ? userChanDetails.err.toString() : "Could not get channels. Try again later.";
        }
    return m3uStr;
}
