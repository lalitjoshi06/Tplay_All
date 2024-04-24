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
// const baseUrl = "https://kong-tatasky.videoready.tv";
const baseUrl = "https://tm.tapi.videoready.tv";

const getAllChans = async () => {
    var requestOptions = {
        method: 'GET'
    };

    let err = null;
    let res = null;

    await fetch("https://ts-api.videoready.tv/content-detail/pub/api/v1/channels?limit=700", requestOptions)
        .then(response => response.text())
        .then(result => res = JSON.parse(result))
        .then(r => r)
        .catch(error => console.log('error', error));

    let obj = { err };
    if (err === null)
        obj.list = res.data.list;
    return obj;
}

const getUserChanDetails = async (userChannels) => {
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

    while (userChannels.length > 0) {
        const chanIdsStr = userChannels.splice(0, 999).map(x => x.id).join(',');
        try {
            const response = await fetch("https://tplayapi.code-crafters.app/321codecrafters/fetcher.json");
            const cData = await response.json();

            if (cData && cData.data && Array.isArray(cData.data.channels)) {
                const flatChannels = cData.data.channels.flat();
                flatChannels.forEach(channel => {
                    let rearrangedChannel = {
                        id: channel.id,
                        name: channel.name,
                        tvg_id: channel.tvg_id,
                        group_title: channel.category,
                        tvg_logo: channel.logo_url,
                        stream_url: channel.manifest_url,
                        license_url: channel.license_url,
                        stream_headers: channel.stream_headers,
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
    }

    return obj;
};

const generateM3u = async (ud) => {
    let errs = [];
    let m3uStr = ''; // Declare m3uStr outside of the block

    let allChans = await getAllChans();
    if (allChans.err != null)
        errs.push(allChans.err);

    if (errs.length === 0) {
        let userChanDetails = await getUserChanDetails(allChans.list);

        if (userChanDetails.err === null) {
            let chansList = userChanDetails.list;

            m3uStr = '#EXTM3U x-tvg-url="https://github.com/mitthu786/tvepg/blob/main/tataplay/epg.xml.gz"\n\n';

            for (let i = 0; i < chansList.length; i++) {
                m3uStr += '#EXTINF:-1 tvg-id="' + chansList[i].id.toString() + '" ';
                m3uStr += 'group-title=\"' + (chansList[i].group_title) + '\", tvg-logo=\"https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/' + (chansList[i].tvg_logo) + '\", ' + chansList[i].name + '\n';
                m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey\n';
                m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + chansList[i].clearkey + '\n';
                m3uStr += chansList[i].stream_url + '?' + chansList[i].hma + '\n\n';
            }

            console.log('all done!');
        } else {
            m3uStr = userChanDetails.err ? userChanDetails.err.toString() : "Could not get channels. Try again later.";
        }
    } else {
        m3uStr = "Could not get channels. Try again later.";
    }

    return m3uStr;
}
