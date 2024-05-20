import fetch from 'cross-fetch';

const getUserChanDetails = async () => {
    let obj = { list: [] };
    let hmacValue;
    try {
        const responseHmac = await fetch("https://tplayapi.code-crafters.app/321codecrafters/hmac.json");
        const data = await responseHmac.json();
        hmacValue = data.data.hmac.hdtl.value;
    } catch (error) {
        console.error('Error fetching and rearranging HMAC data:', error);
        return obj;
    }

   try {
        const responseChannels = await fetch("https://tplayapi.code-crafters.app/321codecrafters/fetcher.json");
        const cData = await responseChannels.json();

        if (cData && cData.data && Array.isArray(cData.data.channels)) {
            const flatChannels = cData.data.channels.flat();
            flatChannels.forEach(channel => {
                let rearrangedChannel = {
                    id: channel.id,
                    clearkey: channel.clearkeys && channel.clearkeys.length > 0 ? (channel.clearkeys.length > 1 ? JSON.stringify(channel.clearkeys[1].hex) : JSON.stringify(channel.clearkeys[0].hex)) : null,
                    hmac: hmacValue
                };
                obj.list.push(rearrangedChannel);
            });
           }
    } catch (error) {
        console.error('Fetch error:', error);
        return obj;
    }

    return obj;
};

const generateM3u = async () => {
    let m3uStr = '';
    let chansDetails = await getUserChanDetails();
    let chansList = chansDetails.list;

     m3uStr = '#EXTM3U x-tvg-url="https://avkb.short.gy/tsepg.xml.gz"\n\n';
     m3uStr += '#EXTM3U × Telegram @HarmanIPTV\n\n';
     m3uStr += 'API credit - CodeCrafters\n\n';


m3uStr += '#EXTINF:-1 tvg-id="842" group-title="Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56389-kfdgngts-v3/imageContent-56389-kfdgngts-m3.png",Somnath Temple' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=842' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/722.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="959" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67692-kwmxxw08-v2/imageContent-67692-kwmxxw08-m3.png",Tata Play Romance' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=959' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1785/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="986" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-70821-l3edt8uw-v1/imageContent-70821-l3edt8uw-m3.png",Tata Play Zindagi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=986' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1813/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="ts2258" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Animax.png",Animax' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=2258' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="8" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25307-jhrhflww-v1/imageContent-25307-jhrhflww-m1.png",STAR Plus HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=8' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_257/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="22" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52679-k7zx7qqg-v1/imageContent-52679-k7zx7qqg-m2.png",News World India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=22' + '\n';
m3uStr += 'https://delta31tatasky.akamaized.net/out/i/57073.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="121" group-title="Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-405-j5jr3sz4-v2/imageContent-405-j5jr3sz4-m2.png",Tata Play Fitness' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=121' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_209/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="641" group-title="Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23495-jf92iycg-v3/imageContent-23495-jf92iycg-m4.png",Tata Play Cooking' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=641' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_876/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="840" group-title="Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56386-kfc14w60-v4/imageContent-56386-kfc14w60-m4.png",Shirdi Sai Baba' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=840' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/554.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="618" group-title="Lifestyle" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12282-ja02jlp4-v2/imageContent-12282-ja02jlp4-m2.png",Tata Play Beauty' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_853/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="15" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43-j5fca4k0-v3/imageContent-43-j5fca4k0-m4.png",SET HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=15' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_300/output/manifest.mpd?begin=20240513T010000&end=' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="556" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12074-j9oat6qw-v6/imageContent-12074-j9oat6qw-m6.png",SET' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=556' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_125/output/manifest.mpd?begin=20240513T010000&end=' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="48" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-141-j5fpeji0-v3/imageContent-141-j5fpeji0-m3.png",SONY SAB HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=48' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized-staging.net/bpk-tv/irdeto_com_Channel_307/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="559" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12081-j9oc38xc-v8/imageContent-12081-j9oc38xc-m7.png",SONY SAB' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=559' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_126/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="40" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-117-j5fl7440-v1/imageContent-117-j5fl7440-m1.png",&TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=40' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_303/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="63" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11073-j95e7nyo-v1/imageContent-11073-j95e7nyo-m1.png",Zee TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=63' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_258/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="557" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12077-j9ob4gm0-v2/imageContent-12077-j9ob4gm0-m2.png",Zee TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=557' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_182/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="244" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-6895-j6vqhqnc-v2/imageContent-6895-j6vqhqnc-m2.png",Star Bharat HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=244' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_411/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="52" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-155-j5frd2uo-v1/imageContent-155-j5frd2uo-m1.png" group-title="Entertainment",Colors HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=52' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_299/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

    
m3uStr += '#EXTINF:-1 tvg-id="543" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12053-j9o3yhko-v1/imageContent-12053-j9o3yhko-m1.png",Colors' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=543' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_101/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="95" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-304-j5ji9otc-v2/imageContent-304-j5ji9otc-m2.png",Tata Play Javed Akhtar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=95' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_192/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="142" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-475-j5jx44s8-v1/imageContent-475-j5jx44s8-m1.png",UTV Bindass' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=142' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_103/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="964" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPCTV_Thumbnail-v4/TPCTV_Thumbnail.png",Tata Play Classic TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=964' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1790/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="551" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12060-j9o91vfc-v2/imageContent-12060-j9o91vfc-m2.png",STAR Utsav' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=551' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_122/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="943" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65443-kty2tkwo-v2/imageContent-65443-kty2tkwo-m2.png",Tata Play Videshi Kahaniyan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=943' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1774/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="523" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11969-j9luigc0-v2/imageContent-11969-j9luigc0-m2.png",Zee Anmol' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=523' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_826/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="633" group-title="Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49002-k5cch1cg-v2/imageContent-49002-k5cch1cg-m5.png",Investigation Discovery' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=633' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_867/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="2100" group-title="Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/ID-HD-LOGO_2000_X_1125_Transpharent.png",Investigation Discovery HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=2100' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_2056/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 group-title=" Entertainment" tvg-logo="https://i.postimg.cc/0ySqBsQM/240px-Sony-Kal-Logo.jpg",Sony Kal' + '\n';
m3uStr += 'https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="438" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RIS_Thumbnail-v3/RIS_Thumbnail.png",Colors Rishtey' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=438' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_694/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="554" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12071-j9oa4gbc-v5/imageContent-12071-j9oa4gbc-m4.png",Sony Pal' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=554' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_193/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="474" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://www.indiantvinfo.com/media/2022/10/Sony-PAL-New-Logo.png",Sony pal HD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/rPzF28qORbKZkhci_04fdQ/master.m3u8?type=ST' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="54" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-150-j5frd0jc-v3/imageContent-150-j5frd0jc-m5.png",The Q' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=54' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_274/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="297" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11266-j9j2spmg-v1/imageContent-11266-j9j2spmg-m1.png",Big Magic' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=297' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_476/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="874" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ch7003_Thumbnail-v1/ch7003_Thumbnail.png",Deployment channel 19.0' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=874' + '\n';
m3uStr += 'https://tataskyvod.pc.cdn.bitgravity.com/delta14/out/i/7976503.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="51" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-158-j5frd560-v2/imageContent-158-j5frd560-m3.png",Dangal' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=51' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_351/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="818" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52945-ka1wdss8-v2/imageContent-52945-ka1wdss8-m2.png",Shemaroo TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=818' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1114/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="180" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-765-j5m2mbjk-v2/imageContent-765-j5m2mbjk-m2.png",Anjan TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=180' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_370/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="191" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-795-j5m7axrc-v1/imageContent-795-j5m7axrc-m1.png",DD National' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=191' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_140/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1045" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHEUM_Thumbnail-v2/SHEUM_Thumbnail.png",Shemaroo UMANG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1045' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1865/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="888" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/Ishara_Thumbnail-v3/Ishara_Thumbnail.png",Ishara' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=888' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1300/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="808" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49809-k7454ppk-v3/imageContent-49809-k7454ppk-m6.png",Tata Play Hits' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=808' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_998/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="326" group-title="Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11350-j9jpk8pk-v1/imageContent-11350-j9jpk8pk-m1.png",DD Kisan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=326' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_510/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="187" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1577-j5xrm7fc-v1/imageContent-1577-j5xrm7fc-m1.png",Colors Infinity HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=187' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_304/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="307" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11296-j9j5ux7s-v2/imageContent-11296-j9j5ux7s-m3.png",Comedy Central HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=307' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_494/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="189" tvg-logo="https://provider-static.plex.tv/epg/cms/production/aca5fb4a-3f31-4527-82d4-80b718821f1f/ShemarooBollywood_logo_dark_-_Shemaroo_USArdx.png" group-title="Movies",SHEMAROO BOLLYWOOD HD' + '\n';
m3uStr += 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00864-shemarooenterta-shemabollywood-ono/playlist.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="2012" tvg-country="IN" tvg-logo="https://images.samsung.com/is/image/samsung/assets/in/tvs/smart-tv/samsung-tv-plus/all-channels/The-movie-Club.png?$ORIGIN_JPG$" group-title="Movies",The Movie Club' + '\n';
m3uStr += 'https://cbqh.short.gy/btech_The Movie Club.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="2013" tvg-country="IN" tvg-logo="https://trademaklogos.s3.ap-south-1.amazonaws.com/5717650.jpeg" group-title="Movies",Hollywood Desi' + '\n';
m3uStr += 'https://cbqh.short.gy/Hollywood Desi.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="2014" tvg-country="IN" tvg-logo="https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/bbo-white.png" group-title="Movies",BBO' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=https://otttv.co.in/tv.php?c=bbo' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://cbqh.short.gy/bjtech_bbo.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="2015" tvg-country="IN" tvg-logo="https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/512X512.png" group-title="Movies",BBO Classic' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=https://otttv.co.in/tv.php?c=bbo' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://cbqh.short.gy/BBO_CLASSIC.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="486" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43899-jyofyk1s-v4/imageContent-43899-jyofyk1s-m4.png",Tata Play Bollywood Premiere' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=486' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_792/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="741" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44333-jz3hpme0-v4/imageContent-44333-jz3hpme0-m8.png",Tata Play Classic Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=741' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1630/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="789" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48748-k4jbpl00-v2/imageContent-48748-k4jbpl00-m3.png",Tata Play Hollywood Local' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=789' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_980/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="666" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31419-jmb48u74-v3/imageContent-31419-jmb48u74-m4.png",Tata Play Theatre HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=666' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_899/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="677" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34170-jok0hf00-v7/imageContent-34170-jok0hf00-m8.PNG",Tata Play ShortsTV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=677' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_902/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1260" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPTAMCL_Thumbnail-v1/TPTAMCL_Thumbnail.png",Tata Play Tamil Classics' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1260' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_2047/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="306" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11293-j9j5u4o0-v3/imageContent-11293-j9j5u4o0-m2.png",Comedy Central' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=306' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_493/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1101" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/WOMFRE_Thumbnail-v1/WOMFRE_Thumbnail.png",Woman' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1101' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1914/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="245" group-title=" Movies" tvg-country="IN" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572f4a3033abf53d08e9137/images/252.webp",STAR GOLD HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=245' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_412/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="bj23" group-title="Movies"tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572f159dc5dfc4403f7be15/images/187.webp",Star Gold' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key={ "keys":[ { "kty":"oct", "k":"VuFESsgmduH9mY7zyZxXgQ", "kid":"ihYrArLpKPxyGFWoJQVauQ" } ], "type":"temporary" }' + '\n';
m3uStr += 'https://bpcdn.dialog.lk/bpk-tv/Ch087/output/index.mpd' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="2101" tvg-country="IN" group-title="Movies" tvg-logo="https://i.postimg.cc/wjJHVg8F/Star-Gold-2.jpg",Star Gold 2 HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_Gold2HD' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="" group-title=" Movies" tvg-country="IN" tvg-logo="https://i.ibb.co/kJCTGhg/CC-20221111-203447.png",Star Gold 2' + '\n';
m3uStr += 'http://pal.alphatx.me:80/play/live.php?mac=00:1A:79:40:B2:BB&stream=1112132&extension=.ts' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="" group-title="Movies" tvg-logo="https://images.gizbot.com/webp/ta/img/2021/08/stargoldromancechannel-1628005000.jpg",Star Gold romance' + '\n';
m3uStr += 'https://indiaiptvforum.shodns.in/cdn.php?id=128485' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="2002" group-title=" Movies" tvg-country="IN" tvg-logo="https://exchange4media.gumlet.io/news-photo/127692-big-2023-05-30T131919.359.jpg",Star Gold Thrill' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_gold_thrills.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="2001" group-title=" Movies" tvg-country="IN" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572f1db033abf53d08e7429/images/167.webp",Star Gold Select HD' + '\n';
m3uStr += 'https://indiaiptvforum.shodns.in/cdn.php?id=197' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1130" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BMSLA_Thumbnail-v2/BMSLA_Thumbnail.png",Tata Play Bollywood Masala' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1130' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1924/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="503" group-title="Movies" tvg-country="IN" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572fd29fe0772265fee52f7/images/460.webp",Zee Cinema HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=503' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_827/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="123" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11027-j8yjr8k0-v1/imageContent-11027-j8yjr8k0-m1.png",Zee Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=123' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_185/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="123" group-title="Movies" tvg-country="IN" tvg-logo="https://distro.tv/desi-eu/img/Bollywood-Prime-thumbnail.png",Bollywood Prime' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=123' + '\n';
m3uStr += 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-prime/playlist.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="123" group-title="Movies" tvg-country="IN" tvg-logo="https://a.jsrdn.com/hls/22882/zee-bollyworld/logo_20240326_225354_70.png",Zee BollyWorld' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=123' + '\n';
m3uStr += 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=6640' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1258" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPCLC2_Thumbnail-v2/TPCLC2_Thumbnail.png",Tata Play Classic Cinema 2' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1258' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_2045/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="544" group-title="Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18305-jcqmvp7s-v1/imageContent-18305-jcqmvp7s-m1.png",Colors Infinity' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=544' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_202/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title="Entertainment" tvg-country="IN" tvg-logo="https://a.jsrdn.com/hls/23141/shemaroo-umang-plus/logo_20240206_191005_68.png",Shemaroo UMANG Plus' + '\n';
m3uStr += 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-umang-plus/master.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="132" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-441-j5jt3mmg-v3/imageContent-441-j5jt3mmg-m3.png",SONY MAX' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=120' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_198/output/manifest.mpd?begin=20240513T010000&end=' + '\n';    


m3uStr += '#EXTINF:-1 tvg-id="80" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-243-j5fyl2f4-v3/imageContent-243-j5fyl2f4-m4.png",SONY MAX HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=80' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_305/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="175" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31233-jli1wlvc-v1/imageContent-31233-jli1wlvc-m1.png",Zee Bollywood' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=175' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_204/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="727" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-42199-jxh2zlj4-v1/imageContent-42199-jxh2zlj4-m1.png",Zee Classic' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=727' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_955/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="100" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11024-j8yix4g8-v1/imageContent-11024-j8yix4g8-m1.png",Zee Action' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=100' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/zee-action/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="64" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11090-j95hdh6o-v1/imageContent-11090-j95hdh6o-m1.png",Zee Anmol Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=64' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_387/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="267" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11173-j9hth720-v1/imageContent-11173-j9hth720-m1.png",&pictures HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=267' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_454/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="148" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-499-j5jydp7s-v1/imageContent-499-j5jydp7s-m1.png",&pictures' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=148' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_203/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="61" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-183-j5fsqz5c-v2/imageContent-183-j5fsqz5c-m2.png",Colors Cineplex HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=61' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_385/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="53" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-149-j5frd0jc-v2/imageContent-149-j5frd0jc-m2.png",Colors Cineplex' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=53' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_384/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="1450" group-title="Movies" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Rishtey_Cineplex.png",Colors Cineplex Superhit' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=1450' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1000" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71752-l5hqgxso-v2/imageContent-71752-l5hqgxso-m1.png",Colors Cineplex Bollywood' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1000' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1827/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id=ts1183 tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/XPOHD_Thumbnail-v1/XPOHD_Thumbnail.png" group-title=" Movies",&Xplor HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1183' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1963/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="56" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-198-j5fsr7mw-v2/imageContent-198-j5fsr7mw-m3.png",Sony Wah' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=56' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_386/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="2003" group-title=" Movies" tvg-country="IN" tvg-logo="https://www.indiantvinfo.com/media/2022/10/Sony-WAH-New-Logo.png",Sony WAH HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://pubads.g.doubleclick.net/ssai/event/H_ZvXWqHRGKpHcdDE5RcDA/master.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="7" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18-j5f9ui8g-v1/imageContent-18-j5f9ui8g-m1.png",B4U Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=7' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_276/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1003" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72254-l6dn8nco-v3/imageContent-72254-l6dn8nco-m4.png",Tata Play South Talkies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1003' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1829/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="182" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-771-j5m3ayw0-v4/imageContent-771-j5m3ayw0-m4.png",Cinema TV India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=182' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_357/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="194" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-798-j5m7esnc-v4/imageContent-798-j5m7esnc-m11.png",Dangal 2' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=194' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_358/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="276" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11200-j9i4gzig-v3/imageContent-11200-j9i4gzig-m4.png",WoW Cinema One' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=276' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_824/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="120" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-402-j5jq1gko-v3/imageContent-402-j5jq1gko-m4.png",SONY MAX 2' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=120' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_199/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="2004" group-title=" Movies" tvg-country="IN" tvg-logo="https://www.indiantvinfo.com/media/2022/10/Sony-MAX2-New-Logo.png",Sony Max2 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://pubads.g.doubleclick.net/ssai/event/4Jcu195QTpCNBXGnpw2I6g/master.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="730" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/B4UKad_Thumbnail-v5/B4UKad_Thumbnail.png",B4U Kadak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=730' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_957/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="296" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11263-j9j1tch4-v2/imageContent-11263-j9j1tch4-m5.png",BFLIX' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=296' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_472/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1117" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ABZYMovies_Thumbnail-v1/ABZYMovies_Thumbnail.png",ABZY Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1117' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/abzy-movies/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="823" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53943-kblsqraw-v3/imageContent-53943-kblsqraw-m4.png",Goldmines' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=823' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1118/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title=" Movies" tvg-country="IN" tvg-logo="http://logo.opplextv.com/logo/GOLDMINESBOLLYWOOD.png",Goldmines Bollywood' + '\n';
m3uStr += 'http://opplex.tv:8080/MansoorWapda/258741/112973' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title=" Movies" tvg-country="IN" tvg-logo="https://i.playboard.app/p/12da4dc6fb6254c12ad155d7cb4400be/default.jpg",Goldmines Movies' + '\n';
m3uStr += 'http://opplex.tv:8080/7987250335/9006783227/275337' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="731" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43106-jxzlt6x4-v2/imageContent-43106-jxzlt6x4-m7.png",Manoranjan TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=731' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_956/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="965" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpt/Temp_Live/cdn/HLS/Channel/imageContent-67799-kx7m7rhc-v1/imageContent-67799-kx7m7rhc-m2.png",Manoranjan Grand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=965' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1793/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="32" group-title="Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-93-j5fjv614-v3/imageContent-93-j5fjv614-m3.png",SONY PIX HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=32' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_301/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1037" group-title="Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DHAMB4U_Thumbnail-v2/DHAMB4U_Thumbnail.png",Dhamaka Movies B4U' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1037' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/dhamaka-movies-b4u/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="558" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12080-j9obub60-v6/imageContent-12080-j9obub60-m6.png",SONY PIX' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=558' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_200/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="599" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12216-j9qm5hjs-v2/imageContent-12216-j9qm5hjs-m2.png",MNX HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=599' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_636/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="234" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1017-j5ngpo2g-v1/imageContent-1017-j5ngpo2g-m1.png",MNX' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=234' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_237/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="562" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12095-j9ooixfs-v1/imageContent-12095-j9ooixfs-m1.png",Movies Now HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=562' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_563/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="173" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-748-j5l5fnts-v1/imageContent-748-j5l5fnts-m1.png",Movies Now' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=173' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_235/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="210" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-826-j5m9kx5c-v1/imageContent-826-j5m9kx5c-m1.png",MN+ HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=210' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_259/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="2005" group-title=" Movies" tvg-country="IN" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572eec7fe0772265fedb969/images/626.webp",&Prive HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/451313.ts' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="2006" group-title=" Movies" tvg-country="IN" tvg-logo="https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/6572eecefe0772265fedb9c6/images/202.webp",&flix HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/451241.ts' + '\n';


m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key={ "keys":[ { "kty":"oct", "k":"9q2WDNIxvrc1kgKB14qJaA", "kid":"+OoVnwEp577QX4HrUojB4A" } ], "type":"temporary" }' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="2008" group-title=" Movies" tvg-country="IN" tvg-logo="https://d3hhg1rtk1dmrv.cloudfront.net/dialogdigitizationservices/productcatalogue/dtv/4/079.png",Star movies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_movies_HD.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="223" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-941-j5mhk5fc-v1/imageContent-941-j5mhk5fc-m1.png",DD Sports' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=223' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_146/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="78" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8301-j7hc0820-v1/imageContent-8301-j7hc0820-m1.png",Star Sports 1 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=78' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="24" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60-j5fdr6a0-v1/imageContent-60-j5fdr6a0-m1.png",Star Sports 1 Hindi HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_sports_1_hindi_HD.ts' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="235" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1021-j5nj3c68-v1/imageContent-1021-j5nj3c68-m1.png",Star Sports 2 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=235' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="367" group-title=" Sports" tvg-country="IN" tvg-logo="https://vignette.wikia.nocookie.net/logopedia/images/2/2a/StarSports3India.jpg/revision/latest/scale-to-width-down/340?cb=20191214234112",Star Sports 3' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/451303.ts' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="246" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG",Star Sports Select 1 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=246' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_413/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="463" group-title=" Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11791-j9kyqpy8-v1/imageContent-11791-j9kyqpy8-m1.png",Star Sports Select 2 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=463' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_729/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1   tvg-logo="https://upload.wikimedia.org/wikipedia/en/5/59/Sony_Sports_Network.png" group-title=" Sports",Sony TEN 1 HD' + '\n';
m3uStr += 'https://dai.google.com/linear/hls/event/wG75n5U8RrOKiFzaWObXbA/master.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="514" group-title=" Sports" tvg-country="IN" tvg-logo="https://origin-staticv2.sonyliv.com/masthead_logo/SonyTEN1_Masthead_Logo.png",SONY TEN 1 SD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/4_pnLi2QTe6bRGvvahRbfg/master.m3u8?type=ST' + '\n';


m3uStr += '#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/5/59/Sony_Sports_Network.png" group-title=" Sports",Sony TEN 2 HD ' + '\n';
m3uStr += 'https://dai.google.com/linear/hls/event/V9h-iyOxRiGp41ppQScDSQ/master.m3u8 ' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="523" group-title=" Sports" tvg-country="IN" tvg-logo="https://origin-staticv2.sonyliv.com/masthead_logo/SonyTEN2_Masthead_Logo.png",SONY TEN 2 SD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/nspQRqO5RmC06VmlPrTwkQ/master.m3u8?type=ST' + '\n';


m3uStr += '#EXTINF:-1   tvg-logo="https://upload.wikimedia.org/wikipedia/en/5/59/Sony_Sports_Network.png" group-title=" Sports",Sony TEN 3 HD ' + '\n';
m3uStr += 'https://dai.google.com/linear/hls/event/ltsCG7TBSCSDmyq0rQtvSA/master.m3u8 ' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="524" group-title=" Sports" tvg-country="IN" tvg-logo="https://origin-staticv2.sonyliv.com/masthead_logo/SonyTEN3_Masthead_Logo.png",SONY TEN 3 SD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/9kocjiLUSf-erlSrv3d4Mw/master.m3u8?type=ST' + '\n';


m3uStr += '#EXTINF: -1   tvg-logo="https://upload.wikimedia.org/wikipedia/en/5/59/Sony_Sports_Network.png" group-title=" Sports",Sony TEN 4 HD ' + '\n';
m3uStr += 'https://pubads.g.doubleclick.net/ssai/event/tNzcW2ZhTVaViggo5ocI-A/master.m3u8 ' + '\n';


m3uStr += '#EXTINF:-1,tvg-id="444" tvg-logo="https://origin-staticv2.sonyliv.com/masthead_logo/SonyTEN4SD_Masthead_Logo.png" tvg-language="MULTI"  tvg-country="IN" tvg-url="" group-title=" Sports" ,SONY TEN 4 SD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/hInaEKUJSziZAGv9boOdjg/master.m3u8?type=ST' + '\n';


m3uStr += '#EXTINF:-1   tvg-logo="https://upload.wikimedia.org/wikipedia/en/5/59/Sony_Sports_Network.png" group-title=" Sports",Sony TEN 5 HD ' + '\n';
m3uStr += 'https://dai.google.com/linear/hls/event/Sle_TR8rQIuZHWzshEXYjQ/master.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="155" group-title=" Sports" tvg-country="IN" tvg-logo="https://origin-staticv2.sonyliv.com/masthead_logo/SonySIXHD_Masthead_Logo.png",SONY SIX HD' + '\n';
m3uStr += 'https://dai.google.com/ssai/event/DD7fA-HgSUaLyZp9AjRYxQ/master.m3u8?type=ST' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="174" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-751-j5l5kb9k-v3/imageContent-751-j5l5kb9k-m3.png",Romedy Now' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=174' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_236/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="691" group-title="News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34886-jqc7dybs-v2/imageContent-34886-jqc7dybs-m2.png",DD News HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=691' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_932/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="980" group-title="Sports" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-70046-l21cybww-v2/imageContent-70046-l21cybww-m5.png",Sports 18 - 1' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1809/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="812" group-title="Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52842-k980h8vc-v1/imageContent-52842-k980h8vc-m2.png",Eurosport HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=812' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1109/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="693" group-title="Sports" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35309-jqxwmcq0-v4/imageContent-35309-jqxwmcq0-m4.png",Eurosport' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=693' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_935/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#KODIPROP:inputstreamaddon=inputstream.adaptive' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.manifest_type=dash' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=org.w3.clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key={ "keys":[ { "kty":"oct", "k":"zYTtE2sMxx+KuM1NT2ouTA", "kid":"A8Lgry+BWfnwzptdvIZfEA" } ], "type":"temporary" }' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="AstroCricket" group-title="Sports" tvg-logo="https://iili.io/1Nz0AP.png",Astro Cricket HD' + '\n';
m3uStr += 'https://cbqh.short.gy/Bjtech_Astro.mpd' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 group-title="Sports" tvg-logo="https://cdn.comedy.co.uk/images/channels/tnt_sports_1.jpg",TNT Sports 1 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://catowrap.live/mrgamingbtsport1.m3u8' + '\n';


m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 group-title="Sports" tvg-logo="https://cdn.comedy.co.uk/images/channels/tnt_sports_2.jpg",TNT SPORTS 2 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://catowrap.live/mrgamingbtsport2.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 group-title="Sports" tvg-logo="https://cdn.comedy.co.uk/images/channels/tnt_sports_3.jpg",TNT SPORTS 3 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://catowrap.live/mrgamingbtsport3.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTINF:-1 group-title="Sports" tvg-logo="https://cdn.comedy.co.uk/images/channels/tnt_sports_3.jpg",TNT SPORTS 4 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://catowrap.live/mrgamingbtsport4.m3u8' + '\n';


m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id=ts1998 tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Sports18_Khel.png" group-title="Sports",Sports18 Khel' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=1998' + '\n';


m3uStr += '#EXTINF:-1 tvg-id=ts1985 tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Sports18_1_SD.png" group-title="Sports",Sports18 1' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=980' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1809/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id=ts1984 tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Sports18_1_HD.png" group-title="Sports",Sports18 1 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1033' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1852/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="9997" group-title="Sports" tvg-country="IN" tvg-logo="https://static.toiimg.com/thumb/msid-98738864,imgsize-8010,width-400,resizemode-4/98738864.jpg",Willow Cricket HD ' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=9997' + '\n';
m3uStr += 'http://public.iptv18.tech/ultapulta.php?id=5069' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" tvg-name="IN | Willow Xtra" tvg-logo="https://5gtv.online:2053/logo/willowxtra1.png" group-title="Sports",Willow Xtra' + '\n';
m3uStr += 'https://ardinesh-pc-remote.puspas.com.np/live-tv/wtc05/live/wtc05-universal/willow-xtra-hd/index.ts' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="133" group-logo="https://media.info/i/lf/0/1507600280/1134.png" group-title="Sports", SKY SPORTS CRICKET HD' + '\n';
m3uStr += 'https://ardinesh-pc-remote.puspas.com.np/live-tv/wtc05/live/wtc05-universal/sky-sports-cricket-hd/index.ts' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="ardinesh-jiotv-portal-4062" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/2/24/FoxCricket.svg/revision/latest/scale-to-width-down/150?cb=20180916123020" group-title="Sports",FOX SPORTS 501 HD' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/445448.ts' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="177" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-759-j5m13014-v2/imageContent-759-j5m13014-m3.png",ABP News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=177' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_165/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="322" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11333-j9joxlw8-v2/imageContent-11333-j9joxlw8-m2.png",DD News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=322' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_517/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="783" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47647-k2lbp2q8-v2/imageContent-47647-k2lbp2q8-m2.png",Tata Play Seniors' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=783' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_974/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="179" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-483-j5jx9x48-v1/imageContent-483-j5jx9x48-m1.png",NDTV India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=179' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_104/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="689" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34652-jpmey8gw-v1/imageContent-34652-jpmey8gw-m1.png",Aaj Tak HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=689' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_930/output/manifest.mpd?begin=20240513T010000&end=' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="188" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BBCWNW_Thumbnail-v3/BBCWNW_Thumbnail.png",BBC News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=188' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_151/output/manifest.mpd?begin=20240513T010000&end=' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="153" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-537-j5kwkd88-v1/imageContent-537-j5kwkd88-m1.png",Aaj Tak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=153' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_191/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id=ts259 tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee" group-title="News",Zee News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=259' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_420/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="872" group-title="Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58613-kj283ly8-v2/imageContent-58613-kj283ly8-m2.png",Tata Play Astro Duniya' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=872' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1148/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1350" group-title="Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58613-kj283ly8-v2/imageContent-58613-kj283ly8-m2.png",Tata Play Lakshya TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key={"keys": [{"kty": "oct","k": "bDZS2ajXc9flDA4wrULuBA","kid": "Y9SpGmBMQF6yPERMAehejQ"}],"type": "temporary"}' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1579.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="104" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8568-j7lnde80-v1/imageContent-8568-j7lnde80-m1.png",India TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=104' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8026939.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="209" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-849-j5m9tmf4-v1/imageContent-849-j5m9tmf4-m1.png",News 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=209' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_308/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="928" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64066-kra2j2qo-v2/imageContent-64066-kra2j2qo-m2.png",Tata Play NEET Prep' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=928' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1323/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="514" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11978-j9lum7d4-v1/imageContent-11978-j9lum7d4-m1.png",Zee Hindustan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=514' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_840/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="106" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-339-j5jm6kko-v1/imageContent-339-j5jm6kko-m1.png",News18 India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=106' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_149/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="929" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64069-kra2o75k-v2/imageContent-64069-kra2o75k-m2.png",Tata Play JEE Prep' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=929' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1324/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="696" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35599-jrm11j9c-v1/imageContent-35599-jrm11j9c-m1.PNG",R Bharat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=696' + '\n';
m3uStr += 'https://vg-republictvlive.akamaized.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-275673/main.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="183" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-774-j5m3h6nk-v1/imageContent-774-j5m3h6nk-m1.png",India News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=183' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025280.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1056" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HAGHAR_Thumbnail-v1/HAGHAR_Thumbnail.png",Tata Play Har Ghar Startup' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1056' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1874/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="706" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67672-kwly0m4w-v1/imageContent-67672-kwly0m4w-m1.png",TV9 Bharatvarsh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=706' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_945/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="966" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67796-kx7lokw8-v2/imageContent-67796-kx7lokw8-m4.png",Times Now Navbharat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=966' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1791/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="36" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-114-j5fl632o-v1/imageContent-114-j5fl632o-m1.png",News Nation' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=36' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8026950.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="932" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64606-krslbshs-v1/imageContent-64606-krslbshs-m2.png",Times Now Navbharat HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=932' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1327/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="485" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11859-j9l2n36w-v2/imageContent-11859-j9l2n36w-m2.png",TOTAL TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=485' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6443117.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="831" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55547-kdzeosow-v3/imageContent-55547-kdzeosow-m6.png",News India 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=831' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6443130.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1010" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BH24_Thumbnail-v3/BH24_Thumbnail.png",Bharat 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1010' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1836/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1031" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72980-l8fn3f28-v2/imageContent-72980-l8fn3f28-m4.png",Surya Samachar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1031' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1842/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="475" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11831-j9kzkn40-v1/imageContent-11831-j9kzkn40-m1.png",Sudarshan News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=475' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_754/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1084" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INDLive_Thumbnail-v1/INDLive_Thumbnail.png",India Daily Live' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1084' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1897/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="286" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-17573-jclve4rc-v1/imageContent-17573-jclve4rc-m1.png",APN News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=286' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_459/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1051" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BHEXP_Thumbnail-v2/BHEXP_Thumbnail.png",Bharat Express' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1051' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1867/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1161" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DSNEW_Thumbnail-v5/DSNEW_Thumbnail.png",Desh News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1161' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1944/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="950" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66223-ku9gfjug-v1/imageContent-66223-ku9gfjug-m1.png",ET Now Swadesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=950' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1781/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="441" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11719-j9ktg6ds-v2/imageContent-11719-j9ktg6ds-m2.png",Samay' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=441' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8027283.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="384" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11527-j9jtx9hk-v2/imageContent-11527-j9jtx9hk-m2.png",Khabarain Abhi Tak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=384' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025681.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="848" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56488-kfgbqzso-v3/imageContent-56488-kfgbqzso-m5.png",Network 10' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=848' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1136/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="291" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11243-j9itj54w-v2/imageContent-11243-j9itj54w-m2.png",Bharat Samachar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=291' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6443095.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="988" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-70993-l3v760zc-v1/imageContent-70993-l3v760zc-m4.png",Har Khabar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=988' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1814/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="685" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34516-jp9bj0qg-v4/imageContent-34516-jp9bj0qg-m4.png",India Voice' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=685' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_922/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="869" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58484-kixj8h6o-v3/imageContent-58484-kixj8h6o-m2.png",Prime News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=869' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/prime-news/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="260" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11120-j95jyuao-v1/imageContent-11120-j95jyuao-m1.png",Zee Business' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=260' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_421/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="414" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11634-j9k0pbr4-v1/imageContent-11634-j9k0pbr4-m1.png",News 1 India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=414' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_658/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="344" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11467-j9jr3k80-v2/imageContent-11467-j9jr3k80-m2.png",Hindi Khabar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=344' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_564/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="204" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-846-j5m9p55k-v1/imageContent-846-j5m9p55k-m1.png",CNBC Awaaz' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=204' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_147/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="701" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-37210-jswmlty0-v2/imageContent-37210-jswmlty0-m2.PNG",Jantantra TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=701' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_941/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="278" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11206-j9icarsw-v2/imageContent-11206-j9icarsw-m2.png",Good News Today' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=278' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_434/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="212" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-858-j5ma94ag-v2/imageContent-858-j5ma94ag-m2.png",Sansad TV - Rajya Sabha' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=212' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_311/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="213" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-825-j5m9c6c0-v2/imageContent-825-j5m9c6c0-m2.png",Sansad TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=213' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_281/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="208" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-834-j5m9nrrs-v1/imageContent-834-j5m9nrrs-m1.png",NDTV 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=208' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_107/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="547" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11853-j9l1tvhs-v4/imageContent-11853-j9l1tvhs-m5.png",Times Now World' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=547' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_779/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="90" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-303-j5ji8zco-v3/imageContent-303-j5ji8zco-m3.png",TIMES NOW' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=90' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_162/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-3-j5dkuhwo-v1/imageContent-3-j5dkuhwo-m2.png",INDIA TODAY' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_221/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="784" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/FNEWS_Thumbnail-v2/FNEWS_Thumbnail.png",FM News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=784' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_976/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="591" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12189-j9plqlf4-v1/imageContent-12189-j9plqlf4-m1.png",MIRROR NOW' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=591' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_615/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="206" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-843-j5m9oyzc-v1/imageContent-843-j5m9oyzc-m1.png",CNN News18' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=206' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_108/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="189" group-title=" English News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8012-j7a2doxc-v1/imageContent-8012-j7a2doxc-m1.png",NewsX' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=189' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6444285.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="255" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9000-j7rkz0m0-v1/imageContent-9000-j7rkz0m0-m1.png",WION' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=255' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_422/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="72" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-231-j5fxh0ag-v1/imageContent-231-j5fxh0ag-m1.png",REPUBLIC TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=72' + '\n';
m3uStr += 'https://vg-republictataplay.akamaized.net/v1/dash/611d79b11b77e2f571934fd80ca1413453772ac7/vg-sk-380287/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="304" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11284-j9j4sn4o-v2/imageContent-11284-j9j4sn4o-m2.png",CNBC TV18 Prime HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=304' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_488/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="93" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-294-j5ji8n08-v1/imageContent-294-j5ji8n08-m1.png",NDTV Profit Prime' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=93' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_110/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="324" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDIND_Thumbnail.png-v4/DDIND_Thumbnail.png.png",DD India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=324' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_508/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="88" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-6904-j6vreaps-v1/imageContent-6904-j6vreaps-m1.png",ET NOW' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=88' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_163/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="243" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-4154-j69pdmvk-v1/imageContent-4154-j69pdmvk-m1.png",CNN' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=243' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_410/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="168" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-731-j5l3muhs-v1/imageContent-731-j5l3muhs-m1.png",CNBC-TV18' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=168' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_109/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="190" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-789-j5m5m0uw-v1/imageContent-789-j5m5m0uw-m1.png",Al Jazeera' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=190' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_187/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="131" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-435-j5jsyz6o-v1/imageContent-435-j5jsyz6o-m1.png",France 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=131' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8026961.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="157" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-548-j5kxtaig-v1/imageContent-548-j5kxtaig-m1.png",Channel News Asia' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=157' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_220/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="65" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-204-j5ftndtc-v1/imageContent-204-j5ftndtc-m1.png",TV5 Monde Asie' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=65' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6443106.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="105" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-324-j5jl5hp4-v2/imageContent-324-j5jl5hp4-m2.png",Australia TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=105' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_239/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="60" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-186-j5fsr1go-v1/imageContent-186-j5fsr1go-m1.png",DW' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=60' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_376/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="98" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-312-j5jjsfhs-v1/imageContent-312-j5jjsfhs-m1.png",Russia Today' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=98' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6445246.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="587" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35365-jr3xz4uo-v5/imageContent-35365-jr3xz4uo-m6.png",Super Hungama' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=587' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_781/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.3' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="2102" group-title=" Kids" tvg-country="IN" tvg-logo="https://w7.pngwing.com/pngs/907/829/png-transparent-hungama-tv-television-channel-television-show-hungama-digital-media-entertainment-watching-tv-television-text-logo.png",Hungama' + '\n';
m3uStr += 'https://dv8r.short.gy/Hungama.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="976" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69827-l1dh5izk-v1/imageContent-69827-l1dh5izk-m1.png",NHK World Japan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=976' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025269.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="114" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1356-j5tdnwmw-v1/imageContent-1356-j5tdnwmw-m1.png",Disney Channel' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=114' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_166/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="disneychannel.in" group-title=" Kids" tvg-country="IN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/b/bb/Disney_Channel_2014_HD.png",Disney Channel HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Disney_channel_HD.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="433" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11658-j9k5lvgo-v1/imageContent-11658-j9k5lvgo-m1.png",Nick HD+' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=433' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_663/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="138" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-465-j5jw9va0-v1/imageContent-465-j5jw9va0-m1.png",Nick' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=138' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_117/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="627" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13097-jbdzn9og-v2/imageContent-13097-jbdzn9og-m2.png",Tata Play Fun Learn Junior' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=627' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_861/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="71" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25721-jia4i70o-v2/imageContent-25721-jia4i70o-m3.PNG",Tata Play English in Hindi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=71' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_396/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="626" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13094-jbdzlsfs-v2/imageContent-13094-jbdzlsfs-m2.png",Tata Play Fun Learn Preschool' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=626' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_860/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="238" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11161-j99h67u8-v1/imageContent-11161-j99h67u8-m1.png",Cartoon Network' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=238' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_405/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="681" group-title="Kids" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34164-jok06xoo-v1/imageContent-34164-jok06xoo-m1.png",Cartoon Network HD+' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=681' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_925/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="119" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24724-jgvwokqw-v1/imageContent-24724-jgvwokqw-m1.png",Discovery Kids' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=119' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_130/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="239" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-2694-j638bugw-v1/imageContent-2694-j638bugw-m1.png",Pogo' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=239' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_406/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="127" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8018-j7a7n1a8-v1/imageContent-8018-j7a7n1a8-m1.png",Sonic Nickelodeon' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=127' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_169/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="867" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57985-khvdchrs-v2/imageContent-57985-khvdchrs-m2.png",Gubbare' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=867' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1143/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="905" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62236-kny7yzaw-v1/imageContent-62236-kny7yzaw-m1.png",ETV Bal Bharat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=905' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1311/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="994" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71550-l4zi50uw-v2/imageContent-71550-l4zi50uw-m5.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=994' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1821/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="45" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-132-j5fpedbs-v4/imageContent-132-j5fpedbs-m6.png",SONY YAY!' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=45' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_365/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="45" group-title="Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-132-j5fpedbs-v4/imageContent-132-j5fpedbs-m6.png",SONY YAY! HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://pubads.g.doubleclick.net/ssai/event/40H5HfwWTZadFGYkBTqagg/master.m3u8?type=ST' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="118" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-390-j5jpps1s-v1/imageContent-390-j5jpps1s-m1.png",Nick Jr' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=118' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_168/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id=ts118 tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Nick_Junior.png" group-title="Kids",Nick Junior' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1189' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_168/output/manifest.mpd?begin=20240513T010000&end=' + '\n';;



m3uStr += '#EXTINF:-1 tvg-id="144" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35368-jr3xz7xs-v1/imageContent-35368-jr3xz7xs-m1.png",Disney Junior' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=144' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_167/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="111" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-352-j5jmrkqw-v2/imageContent-352-j5jmrkqw-m2.png",Tata Play Smart Manager' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=111' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_391/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="137" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-462-j5jw44hk-v2/imageContent-462-j5jw44hk-m3.png",National Geographic' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=137' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_113/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="167" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-703-j5l1wgco-v2/imageContent-703-j5l1wgco-m2.png",Tata Play Vedic Maths' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=167' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_392/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="816" group-title=" Kids" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52868-k9af4lxs-v1/imageContent-52868-k9af4lxs-m1.png",CBeeBies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=816' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1112/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title=" Kids" tvg-logo="https://i.postimg.cc/RFYmJhWz/image_82.jpg",Wow Kidz' + '\n';
m3uStr += 'https://bdtubelive.xyz/yupptv-hd.m3u8?id=wow-kidz-hindi' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="" group-title=" Kids" tvg-logo="https://yt3.googleusercontent.com/ytc/AIdro_lHkl75JwCoxmpq-s7xRLq_JdXB2H70r9xKlsVR-g=s900-c-k-c0x00ffffff-no-rj",Wow Kids Action' + '\n';
m3uStr += 'http://opplex.tv:8080/7987250335/9006783227/314753' + '\n';
m3uStr += '#EXTINF:-1 group-title=" Kids" tvg-logo="https://i.imgur.com/vbi9liD.jpg",Wow Kidz Comedy ' + '\n';
m3uStr += 'http://opplex.tv:8080/7987250335/9006783227/311774' + '\n';
m3uStr += '#EXTINF:-1 group-title=" Kids" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/MinimaxLogo2013.png/800px-MinimaxLogo2013.png",Minimax' + '\n';
m3uStr += 'https://dv8r.short.gy/Minimax.m3u8' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="" tvg-logo="https://c0.klipartz.com/pngpicture/640/232/gratis-png-dorami-doraemon-desktop-fujiko-fujio-android-doraemon.png" group-title=" Kids",X-DORAEMON' + '\n';
m3uStr += 'http://livetvbox.live:8080/live/Dennis3/Dennis3/147746.m3u8' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="" tvg-logo="https://www.pikpng.com/pngl/m/211-2114955_shin-chan-logo1-shin-chan-logo-clipart.png" group-title=" Kids",X-SHINCHAN' + '\n';
m3uStr += 'http://livetvbox.live:8080/live/Dennis3/Dennis3/147724.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="605" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12234-j9qoqc54-v1/imageContent-12234-j9qoqc54-m1.png",National Geographic HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=605' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_652/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="184" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-438-j5jt26xc-v2/imageContent-438-j5jt26xc-m2.png",Nat Geo Wild' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=184' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_119/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="130" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-432-j5jsx754-v4/imageContent-432-j5jsx754-m4.png",Animal Planet' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=130' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_129/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="287" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44915-jzuyh3w0-v1/imageContent-44915-jzuyh3w0-m1.png",Animal Planet HD World' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=287' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_457/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="219" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-876-j5mcolzc-v2/imageContent-876-j5mcolzc-m2.png",Discovery Channel' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=219' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_128/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="341" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11396-j9jq7jg0-v1/imageContent-11396-j9jq7jg0-m1.png",Discovery HD World' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=341' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_530/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="413" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11631-j9k0ndjc-v1/imageContent-11631-j9k0ndjc-m1.png",Nat Geo Wild HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=413' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_655/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="113" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-369-j5jo9i3s-v1/imageContent-369-j5jo9i3s-m1.png",Discovery Science' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=113' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_153/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="616" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12267-j9qx2si0-v3/imageContent-12267-j9qx2si0-m3.png",History TV18 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=616' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_565/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="460" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11779-j9kx7rk0-v3/imageContent-11779-j9kx7rk0-m4.png",SONY BBC Earth HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=460' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_722/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="367" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11429-j9jqu3y0-v1/imageContent-11429-j9jqu3y0-m1.png",FOX Life HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=367' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_544/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="646" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23855-jg9jt83c-v2/imageContent-23855-jg9jt83c-m8.png",DD Gyan Darshan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=646' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_881/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="158" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-551-j5ky7ufk-v5/imageContent-551-j5ky7ufk-m7.png",SONY BBC Earth' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=158' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_400/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="135" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-453-j5jtup5s-v2/imageContent-453-j5jtup5s-m2.png",TLC' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=135' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_127/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="126" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EPI_Thumbnail-v2/EPI_Thumbnail.png",EPIC' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=126' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_194/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="923" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-63764-kr1kzw28-v2/imageContent-63764-kr1kzw28-m2.png",TravelXP 4K HDR' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=923' + '\n';
m3uStr += 'https://deltatesttatasky.akamaized.net/out/i/968284.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="DB-5" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dFqUd9QNKh1dPv3MPpH-IGpIXEFr_3puCXSEDn-bqg&s",Love nature 4K' + '\n';
m3uStr += 'https://d18dyiwu97wm6q.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/LoveNature4K2-prod/playlist.m3u8' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-6" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://i.imgur.com/VndW1IX.png",Nature Time' + '\n';
m3uStr += 'https://shls-live-ak.akamaized.net/out/v1/b06a89a463764d3688cda337d40dc5bf/index.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="480" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11858-j9l1v6k8-v3/imageContent-11858-j9l1v6k8-m4.png",TLC HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=480' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_780/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="484" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11862-j9l2p61c-v1/imageContent-11862-j9l2p61c-m1.png",Travelxp HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=484' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_788/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="136" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-42020-jxb7qjw8-v1/imageContent-42020-jxb7qjw8-m1.png",GOOD TiMES' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=136' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_111/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="228" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-967-j5mr8tw8-v1/imageContent-967-j5mr8tw8-m1.png",Discovery Turbo' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=228' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_145/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="117" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-384-j5jpj9hc-v1/imageContent-384-j5jpj9hc-m1.png",Food Food' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=117' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_154/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-8" group-title=" Lifestyle" tvg-country="IN" tvg-logo="http://p-img.movetv.com/images/f29cb6c97d51bda523b895e06cad25a305e4851f",Foodxp' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=1955' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="172" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-745-j5l54bnc-v2/imageContent-745-j5l54bnc-m2.png",History TV18' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=172' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_120/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="55" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-157-j5frd4e8-v1/imageContent-157-j5frd4e8-m1.png",Travelxp' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=55' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_366/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="227" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-959-j5mipsnk-v1/imageContent-959-j5mipsnk-m1.png",Fashion TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=227' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_404/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="139" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-468-j5jwdbi8-v1/imageContent-468-j5jwdbi8-m1.png",9XM' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=139' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_201/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="735" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44321-jz2zb8pk-v3/imageContent-44321-jz2zb8pk-m3.png",Tata Play Ibaadat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=735' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1632/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="96" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24696-jgrq09a8-v1/imageContent-24696-jgrq09a8-m1.png",Zoom' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=96' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_164/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="406" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11610-j9jzore8-v2/imageContent-11610-j9jzore8-m2.png",MTV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=406' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_638/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="405" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11607-j9jznhvc-v1/imageContent-11607-j9jznhvc-m1.png",MTV Beats HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=405' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_637/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 group-title=" Music" tvg-logo="https://qqcdnpictest.mxplay.com/pic/4997.DistroTv.in/hi/16x9/320x180/1707501705875thumbh_20240206_190035.webp",Shemaroo Filmy Gane' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=com.widevine.alpha' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=' + '\n';
m3uStr += '#EXTVLCOPT:http-referrer=' + '\n';
m3uStr += 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.3' + '\n';
m3uStr += 'https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-filmigaane/master.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-logo="https://i.postimg.cc/SsV5H9tF/In-Shot-20240325-164504272.jpg" group-title=" Music" , T Series Music ' + '\n';
m3uStr += 'http://cyberxstudios.tech/none/mac/doom/live.php?id=10544' + '\n';


m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id=ts250 tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Music_India.png" group-title=" Music",Music India' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=250' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="224" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-946-j5mip6a0-v1/imageContent-946-j5mip6a0-m1.png",E24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=224' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_278/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="517" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11993-j9luua9c-v1/imageContent-11993-j9luua9c-m1.png",Zing' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=517' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_843/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="17" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57-j5fdr2f4-v1/imageContent-57-j5fdr2f4-m1.png",Mastiii' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=17' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_279/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="9" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24-j5fb33y0-v1/imageContent-24-j5fb33y0-m1.png",B4U Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=9' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_277/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="39" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-102-j5fl5pyg-v1/imageContent-102-j5fl5pyg-m1.png",9X Jalwa' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=39' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_355/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="733" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/Showbox_Thumbnail-v2/Showbox_Thumbnail.png",Showbox' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=733' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_961/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1259" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/AYLI_Thumbnail-v1/AYLI_Thumbnail.png",Ayodhya Darshan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1259' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/ayodhya-darshan/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="103" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-330-j5jl5on4-v2/imageContent-330-j5jl5on4-m2.png",MTV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=103' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_105/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="539" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12030-j9nyctjk-v3/imageContent-12030-j9nyctjk-m5.png",VH1 HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=539' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_817/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="43" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-123-j5fnf1fc-v1/imageContent-123-j5fnf1fc-m1.png",Sanskar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=43' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025908.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="236" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1018-j5nhzme0-v1/imageContent-1018-j5nhzme0-m1.png",MTV Beats' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=236' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_402/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="DB-1" tvg-logo="https://2.bp.blogspot.com/-jOPOMBYP0Hk/XKgrK1Px5yI/AAAAAAAAAH8/V7HVJZOBGiY0vREOs9WePJfOvWDDFa_wACLcBGAs/w680/images%2B%25289%2529.jpeg" group-title="Music",Hindi Hits HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Hindi_hits_HD.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-9" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Pop_Pataka.png" group-title="Music",Pop Pataka HD' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=2037' + '\n';


m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-10" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Kadak_Hits.png" group-title="Music",Kadak Hits' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=1249' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-11" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Dil_Se.png" group-title="Music",Dil se' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=2036' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="DB-3" tvg-logo="https://img.joyn.de/cms/var/assets/Content/Shared/Brand/CMS/AVOD/kronehit%2Btv/kronehitTV_logo_1.png/profile:nextgen-web-brand-150x" group-title="Music",Kronehit tv' + '\n';
m3uStr += 'http://bitcdn-kronehit.bitmovin.com/v2/hls/chunklist_b1628000.m3u8' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="DB-4" tvg-logo="https://i.imgur.com/PozF9MT.png" group-title="Music",1Mus Tv' + '\n';
m3uStr += 'http://hz1.teleport.cc/HLS/HD.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="DB-6" tvg-logo="https://2.bp.blogspot.com/-jOPOMBYP0Hk/XKgrK1Px5yI/AAAAAAAAAH8/V7HVJZOBGiY0vREOs9WePJfOvWDDFa_wACLcBGAs/w680/images%2B%25289%2529.jpeg" group-title="Music",Kadak HUNGAMA Hits' + '\n';
m3uStr += 'https://live-hungama.multitvsolution.com/kadakhits/playlist.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="DB-7" tvg-logo="https://2.bp.blogspot.com/-jOPOMBYP0Hk/XKgrK1Px5yI/AAAAAAAAAH8/V7HVJZOBGiY0vREOs9WePJfOvWDDFa_wACLcBGAs/w680/images%2B%25289%2529.jpeg" group-title="Music",Dilse HUNGAMA Hits' + '\n';
m3uStr += 'https://live-hungama.multitvsolution.com/dilse/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="446" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11725-j9kw030w-v4/imageContent-11725-j9kw030w-m4.png",Paras Gold One' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=446' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_669/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="38" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-105-j5fl5t1k-v1/imageContent-105-j5fl5t1k-m1.png",Aastha' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=38' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_341/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="397" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11590-j9jyx4so-v1/imageContent-11590-j9jyx4so-m1.png",MH One Shraddha' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=397' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6446188.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="288" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ARIH_Thumbnail-v2/ARIH_Thumbnail.png",Dharma Sandesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=288' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_461/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="420" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11664-j9kcouh4-v1/imageContent-11664-j9kcouh4-m1.png",Peace of Mind' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=420' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_670/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="373" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11507-j9jto5k0-v1/imageContent-11507-j9jto5k0-m1.png",Jinvani Channel' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=373' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/jinvani-channel/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="456" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11767-j9kwretk-v1/imageContent-11767-j9kwretk-m1.png",Satsang TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=456' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025897.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="447" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11746-j9kwfmfs-v2/imageContent-11746-j9kwfmfs-m2.png",Sadhna TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=447' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_696/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="594" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12196-j9q3ez54-v1/imageContent-12196-j9q3ez54-m1.png",Ishwar TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=594' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_579/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="458" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11775-j9kwuk8w-v1/imageContent-11775-j9kwuk8w-m1.png",Shubh TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=458' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_715/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="500" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11903-j9l4wxy8-v1/imageContent-11903-j9l4wxy8-m1.png",Vedic' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=500' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_814/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="283" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11212-j9icd8jc-v1/imageContent-11212-j9icd8jc-m1.png",Aastha Bhajan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=283' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_436/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="728" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43103-jxzlrb0o-v2/imageContent-43103-jxzlrb0o-m2.png",Subharti TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=728' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_958/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="775" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11408-j9jqmlvs-v6/imageContent-11408-j9jqmlvs-m4.png",DIVYA' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=775' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_969/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="969" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69024-kzo68h3c-v1/imageContent-69024-kzo68h3c-m1.png",Aadinath TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=969' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1799/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="385" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11547-j9ju62m8-v3/imageContent-11547-j9ju62m8-m3.png",Sharnam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=385' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/sharnam-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="837" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HareKrsna_Thumbnail-v1/HareKrsna_Thumbnail.png",Hare Krsna' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=837' + '\n';
m3uStr += 'https://hktv.harekrsnatv.com/HKTV/HKWebApp/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="935" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65100-kspm2814-v1/imageContent-65100-kspm2814-m2.png",Awakening' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=935' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1184/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="12" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-42-j5fc9b8g-v3/imageContent-42-j5fc9b8g-m3.png",Zee Ganga' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=12' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_380/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1119" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SA24x7_Thumbnail-v2/SA24x7_Thumbnail.png",Sanskriti 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1119' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/sanskriti-24x7/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="814" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52853-k982u9ts-v1/imageContent-52853-k982u9ts-m1.png",Zee Biskope' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=814' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1111/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="802" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STU1PLS_Thumbnail-v2/STU1PLS_Thumbnail.png",Studio One +' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=802' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6367824.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="830" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55553-kdzetu0o-v3/imageContent-55553-kdzetu0o-m8.png",Filamchi Bhojpuri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=830' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1126/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="970" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69027-kzo69re0-v1/imageContent-69027-kzo69re0-m2.png",MH One Dil Se' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=970' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1800/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="911" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62610-koxujv2g-v2/imageContent-62610-koxujv2g-m3.png",Santwani' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=911' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1316/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="181" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-768-j5m31cfs-v1/imageContent-768-j5m31cfs-m1.png",Bhojpuri Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=181' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_379/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="431" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OSMOV_Thumbnail-v3/OSMOV_Thumbnail.png",Oscar Movies Bhojpuri.' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=431' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025247.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="729" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43109-jxzlyrjc-v1/imageContent-43109-jxzlyrjc-m1.png",B4U Bhojpuri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=729' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_959/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="79" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23223-jeyhnzfs-v1/imageContent-23223-jeyhnzfs-m1.png",News18 Uttar Pradesh Uttarakhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=79' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_352/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1165" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RPCHK_Thumbnail-v2/RPCHK_Thumbnail.png",Raapchik' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1165' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1947/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="166" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23206-jey39grs-v1/imageContent-23206-jey39grs-m2.png",News18 Bihar Jharkhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=166' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_247/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="637" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21315-je85i72w-v1/imageContent-21315-je85i72w-m5.png",Zee Uttar Pradesh Uttarakhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=637' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_874/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="20" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11140-j96syfuo-v1/imageContent-11140-j96syfuo-m1.png",Zee Bihar Jharkhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=20' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_389/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="613" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12252-j9qrkgu8-v3/imageContent-12252-j9qrkgu8-m2.png",News State UP Uttarakhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=613' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_661/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="838" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56320-kf6aheeo-v2/imageContent-56320-kf6aheeo-m3.png",Kashish News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=838' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1130/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="973" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69315-l02nqy9k-v1/imageContent-69315-l02nqy9k-m6.png",Sahara Samay UP-UKD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=973' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1802/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="899" group-title=" Movies" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62150-knicubns-v2/imageContent-62150-knicubns-m2.png",Pasand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=899' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1309/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="7894" tvg-logo="https://dl.dropboxusercontent.com/scl/fi/88yhzevajusuo8inbx5en/Bollywood_Premier_HD.png?rlkey=zfi546es133n6x38lwkbw4y4x&st=yu62z68p&dl=0" group-title="Movies",Bollywood Premier HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Bollywood_premier_HD.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="7925" group-title="Movies" tvg-country="IN" tvg-logo="https://dl.dropboxusercontent.com/scl/fi/ah6bc4a18v64nbebteu76/Hollywood_Tadka_HD.png?rlkey=g2bo056bl4s4e477y8xezmmwv&st=dbgn7356&dl=0",Hollywood Tadka HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Hollywood_tadka_HD.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="155" tvg-logo="https://dl.dropboxusercontent.com/scl/fi/zlmctsbkcuzvqj74q3gam/Bollywood_Nonstop_HD.png?rlkey=bo3co5bi8avri8q7rig0ry3yx&st=bhrvzqwp&dl=0" group-title="Movies",Bollywood Nonstop HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Bollywood_nonstop_HD.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="41966" group-title="Movies" tvg-country="IN" tvg-logo="https://dl.dropboxusercontent.com/scl/fi/2nm6hdal5e6de3vt8ypeq/Bollywood_Hits_HD.png?rlkey=29yy1cso62f00x5c6l44haklj&st=20onvbfr&dl=0",Bollywood Hits HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Bollywood_hits_HD.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="30" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9007-j7ss7x80-v1/imageContent-9007-j7ss7x80-m1.png",India News UP UK' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=30' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_361/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="339" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11389-j9jq2ybk-v1/imageContent-11389-j9jq2ybk-m1.png",DD Uttar Pradesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=339' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_525/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="316" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDBH_Thumbnail-v2/DDBH_Thumbnail.png",DD Bharati' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=316' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_504/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="203" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23266-jez523so-v1/imageContent-23266-jez523so-m2.png",News18 Madhya Pradesh Chhattisgarh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=203' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_213/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="27" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-78-j5fikkk8-v1/imageContent-78-j5fikkk8-m1.png",IBC 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=27' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_331/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="317" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11321-j9jlxaz4-v1/imageContent-11321-j9jlxaz4-m1.png",DD Bihar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=317' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_505/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="512" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11981-j9lunvjs-v1/imageContent-11981-j9lunvjs-m1.png",Zee Madhya Pradesh Chattisgarh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=512' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_837/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="827" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55124-kd89b0f4-v1/imageContent-55124-kd89b0f4-m4.png",Sadhna Plus News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=827' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1124/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="698" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35622-jrr5mvig-v1/imageContent-35622-jrr5mvig-m1.png",INH 24X7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=698' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_939/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="222" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8971-j7rffd40-v1/imageContent-8971-j7rffd40-m1.png",India News MP CG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=222' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_359/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="577" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12143-j9p7vx9c-v1/imageContent-12143-j9p7vx9c-m1.png",Swaraj Express SMBC' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=577' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_719/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="902" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62181-knrp5974-v1/imageContent-62181-knrp5974-m1.png",News 24 Madhyapradesh Chattisgarh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=902' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1310/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="643" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31191-jldnwhhs-v1/imageContent-31191-jldnwhhs-m1.png",News State MP CG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=643' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_878/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="652" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25494-ji1a6ym0-v2/imageContent-25494-ji1a6ym0-m2.png",Bansal News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=652' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_885/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1009" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72340-l6nkcw74-v1/imageContent-72340-l6nkcw74-m1.png",TV27 News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1009' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1837/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="993" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71503-l4su2elk-v2/imageContent-71503-l4su2elk-m7.png",News Hour' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=993' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1820/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1159" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTVMP_Thumbnail-v2/NDTVMP_Thumbnail.png",NDTV MPCG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1159' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1943/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1074" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TV24N_Thumbnail-v2/TV24N_Thumbnail.png",TV 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1074' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1889/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="829" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55112-kd88u9so-v1/imageContent-55112-kd88u9so-m2.png",Sadhna News MP CG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=829' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1122/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="330" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11351-j9jpmdvc-v1/imageContent-11351-j9jpmdvc-m1.png",DD Madhya Pradesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=330' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_511/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="583" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12158-j9pd883k-v1/imageContent-12158-j9pd883k-m1.png",Zee Rajasthan News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=583' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_831/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="205" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23226-jeyiac80-v1/imageContent-23226-jeyiac80-m1.png",News18 Rajasthan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=205' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_141/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="650" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25048-jhir0kko-v1/imageContent-25048-jhir0kko-m1.png",First India Rajasthan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=650' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_884/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="937" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65108-ksr7d028-v1/imageContent-65108-ksr7d028-m2.png",Anaadi TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=937' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1333/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="14" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9012-j7ssufeo-v1/imageContent-9012-j7ssufeo-m1.png",India News Rajasthan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=14' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_360/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1188" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDJH_Thumbnail-v2/DDJH_Thumbnail.png",DD Jharkhand' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1188' + '\n';
m3uStr += 'https://delta.tatasky.net/bpk-tv/irdeto_com_Channel_1967/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="870" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58492-kixkb2ug-v1/imageContent-58492-kixkb2ug-m1.png",Jan TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=870' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1147/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="332" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11375-j9jpws3k-v1/imageContent-11375-j9jpws3k-m1.png",DD Rajasthan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=332' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_521/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1152" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTVRA_Thumbnail-v3/NDTVRA_Thumbnail.png",NDTV Rajasthan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1152' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1942/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="518" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZESA_Thumbnail-v3/ZESA_Thumbnail.png",Salaam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=518' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_839/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="354" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11426-j9jqror4-v3/imageContent-11426-j9jqror4-m3.png",News18 Jammu Kashmir Ladakh Himachal' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=354' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_540/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1075" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SACHB_Thumbnail-v2/SACHB_Thumbnail.png",Sach Bedhadak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1075' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1888/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="308" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-16764-jcix3xpc-v2/imageContent-16764-jcix3xpc-m2.PNG",Colors Marathi HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=308' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_491/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="338" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11384-j9jq29mo-v2/imageContent-11384-j9jq29mo-m3.png",DD Urdu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=338' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_524/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="134" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-450-j5jtumug-v3/imageContent-450-j5jtumug-m3.png",Colors Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=134' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_230/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="251" group-title="Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8846-j7pq3jmo-v2/imageContent-8846-j7pq3jmo-m3.png",Zee Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=251' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_424/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="501" group-title="Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee",Zee Marathi HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=501' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_836/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="622" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12925-jb5xf2nc-v2/imageContent-12925-jb5xf2nc-m2.png",Tata Play Marathi Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=622' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_854/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="161" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7906-j7684flk-v1/imageContent-7906-j7684flk-m1.png",Channel WIN' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=161' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_354/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="658" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-30959-jky1nic8-v2/imageContent-30959-jky1nic8-m3.png",Sony Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=658' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_892/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="515" group-title="Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11987-j9lura8g-v1/imageContent-11987-j9lura8g-m1.png",Zee Talkies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=515' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_841/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="365" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11455-j9jqz61k-v2/imageContent-11455-j9jqz61k-m4.png",Gulistan News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=365' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_557/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="248" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11136-j96p4r28-v1/imageContent-11136-j96p4r28-m1.png",Zee YUVA' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=248' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_426/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="192" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-801-j5m7jg34-v2/imageContent-801-j5m7jg34-m2.png",Fakt Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=192' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_231/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="469" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11807-j9kyzle8-v1/imageContent-11807-j9kyzle8-m1.png",Star Pravah HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=469' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_744/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="18714" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SPRPHD_Thumbnail-v1/SPRPHD_Thumbnail.png",Star Pravah Pictures HD ' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=18714' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_Pravah_PictureHD.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="155" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STMJNW_Thumbnail-v3/STMJNW_Thumbnail.png",ABP Majha' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=155' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_328/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="249" group-title="Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee-Talkies-transparent.png",Zee Talkies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=249' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_425/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="999" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TONSMAR_Thumbnail-v10/TONSMAR_Thumbnail.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/7253194.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="140" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12140-j9p7vga8-v1/imageContent-12140-j9p7vga8-m1.png",News18 Lokmat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=140' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/news18-lokmat/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="261" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11156-j96xbrfk-v1/imageContent-11156-j96xbrfk-m1.png",Zee 24 Taas' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=261' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_427/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="546" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12056-j9o5hia8-v1/imageContent-12056-j9o5hia8-m1.png",Saam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=546' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_326/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="800" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49025-k5lxf84o-v2/imageContent-49025-k5lxf84o-m2.png",Shemaroo MarathiBana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=800' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_991/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="233" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1014-j5ngcjug-v2/imageContent-1014-j5ngcjug-m2.png",Jai Maharashtra' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=233' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_329/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="97" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-315-j5jjsht4-v2/imageContent-315-j5jjsht4-m2.png",TV9 Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=97' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_364/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1102" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PDNEWS_Thumbnail-v2/PDNEWS_Thumbnail.png",Pudhari News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1102' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1915/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="336" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11378-j9jq0f9s-v1/imageContent-11378-j9jq0f9s-m1.png",DD Sahyadri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=336' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_522/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="816" group-title="Bengali" tvg-country="BD" tvg-logo="https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png",Duronto TV HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Duronto_TV.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="817" group-title="Bengali" tvg-country="BD" tvg-logo="https://www.highnewslive.in/wp-content/uploads/2023/05/imgpsh_fullsize_anim-min.jpeg",High News' + '\n';
m3uStr += 'https://highmedia.livebox.co.in/HIGHNEWShls/LIVE.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="818" group-title="Bengali" tvg-country="BD" tvg-logo="https://static.wikia.nocookie.net/etv-gspn-bangla/images/1/14/Channel_Dinraat_logo.png/revision/latest?cb=20210917023142",Channel Dinraat' + '\n';
m3uStr += 'https://ythls.armelin.one/channel/UCILYNzZvWNUPaALmDJBIMAw.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="819" group-title="Bengali" tvg-country="BD" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmzx2XTAcQb8YYuSC34QPiFO1vBp4ZYLagLvi58gc9g&s",Digital Bangla' + '\n';
m3uStr += 'https://digitalbangla.livebox.co.in/digitalbanglahls/live.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="305" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11287-j9j4tl2w-v2/imageContent-11287-j9j4tl2w-m3.png",Colors Bangla HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=305' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_489/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="217" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-870-j5mb6j80-v1/imageContent-870-j5mb6j80-m1.png",Sangeet Marathi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=217' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_363/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="468" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STJHD_Thumbnail-v3/STJHD_Thumbnail.png",Star Jalsha HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=468' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_736/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="522" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11970-j9luk5ag-v1/imageContent-11970-j9luk5ag-m1.png",Zee Bangla HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=522' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_834/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="34" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-94-j5fjveio-v3/imageContent-94-j5fjveio-m2.png",SONY AATH' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=34' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_285/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="129" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-267-j5j8x17s-v1/imageContent-267-j5j8x17s-m2.png",Aakaash Aath' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=129' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025886.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="537" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11514-j9jtp5tk-v1/imageContent-11514-j9jtp5tk-m2.png",Jalsha Movies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=537' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_583/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="3" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9-j5f6oezc-v1/imageContent-9-j5f6oezc-m1.png",Ruposhi Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=3' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_284/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="995" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TONSBEN_Thumbnail-v5/TONSBEN_Thumbnail.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1823/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="788" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48494-k3zd1a80-v1/imageContent-48494-k3zd1a80-m4.png",Enterr10 Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=788' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_978/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="254" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11009-j8xbk7js-v1/imageContent-11009-j8xbk7js-m1.png",Zee Bangla Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=254' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_418/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="26" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-75-j5fikj0o-v1/imageContent-75-j5fikj0o-m1.png",Colors Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=26' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_283/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="379" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-27017-jjo92wyg-v1/imageContent-27017-jjo92wyg-m1.png",Khushboo Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=379' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/khushboo-bangla/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="258" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9031-j7u3nz6w-v1/imageContent-9031-j7u3nz6w-m1.png",Zee 24 Ghanta' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=258' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_419/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1134" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RPLUSG_Thumbnail-v1/RPLUSG_Thumbnail.png",R Plus Gold' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1134' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/r-plus-gold/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="23" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-22186-jenuxy6g-v2/imageContent-22186-jenuxy6g-m5.png",News18 Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=23' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_286/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="381" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11533-j9jtxqgo-v1/imageContent-11533-j9jtxqgo-m1.png",Kolkata TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=381' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/kolkata-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="102" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-321-j5jl5g5k-v2/imageContent-321-j5jl5g5k-m2.png",ABP Ananda' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=102' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_249/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1132" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RONGEEN_Thumbnail-v1/RONGEEN_Thumbnail.png",Rongeen TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1132' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1926/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="896" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/CLRBANG_Thumbnail-v2/CLRBANG_Thumbnail.png",Colors Bangla Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=896' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1305/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="207" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-852-j5m9xe80-v1/imageContent-852-j5m9xe80-m1.png",News Time Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=207' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_287/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="648" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24685-jgrl9bqg-v1/imageContent-24685-jgrl9bqg-m2.png",Calcutta News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=648' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_477/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="311" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11299-j9j61p1k-v1/imageContent-11299-j9j61p1k-m1.png",CTVN AKD Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=311' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_495/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="873" group-title="Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-59401-kjudpa1c-v2/imageContent-59401-kjudpa1c-m3.png",TV9 Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=873' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1149/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1103" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NKTVBAN_Thumbnail-v3/NKTVBAN_Thumbnail.png",NKTV BANGLA' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1103' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1916/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="314" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11314-j9j8kcxk-v1/imageContent-11314-j9j8kcxk-m1.png",DD Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=314' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_503/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="890" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61251-klylf4u0-v2/imageContent-61251-klylf4u0-m9.png",Republic Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=890' + '\n';
m3uStr += 'https://vg-republictataplay.akamaized.net/v1/dash/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-323611/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="8457" group-title=" Telugu" tvg-country="IN" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/7/74/Star_Sports_1_Telugu_HD.png/revision/latest/scale-to-width-down/250?cb=20211017160105",Star Sports 1 HD Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=8457' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_sports1_HD_telugu.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="250" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee",Zee Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=250' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_415/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1133" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RPLUS_Thumbnail-v1/RPLUS_Thumbnail.png",R Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1133' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1927/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="635" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee",Zee Telugu HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=635' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_873/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="215" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-864-j5mava4o-v1/imageContent-864-j5mava4o-m1.png",Sangeet Bangla' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=215' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_242/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="359" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11418-j9jqpvxs-v1/imageContent-11418-j9jqpvxs-m1.png",ETV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=359' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_537/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="516" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25361-jhsvr3nc-v1/imageContent-25361-jhsvr3nc-m1.png",STAR Maa HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=516' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_609/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="355" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11444-j9jqx6a8-v1/imageContent-11444-j9jqx6a8-m1.png",Gemini TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=355' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_553/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="956" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66705-kuqnqhwg-v1/imageContent-66705-kuqnqhwg-m1.png",STAR Maa HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=956' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1375.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="352" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11423-j9jqqegg-v1/imageContent-11423-j9jqqegg-m1.png",ETV Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=352' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_539/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="996" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TONSTEL_Thumbnail-v4/TONSTEL_Thumbnail.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1822/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="590" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12186-j9plqam8-v4/imageContent-12186-j9plqam8-m5.png",Telugu Naaptol' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=590' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6446199.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="361" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11437-j9jqv7ao-v2/imageContent-11437-j9jqv7ao-m2.png",Gemini Life' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=361' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_549/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="585" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12164-j9phk5iw-v1/imageContent-12164-j9phk5iw-m1.png",Vissa TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=585' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_820/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="362" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11438-j9jqvyaw-v1/imageContent-11438-j9jqvyaw-m1.png",Gemini Movies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=362' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_550/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="145" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-492-j5jxvaeo-v1/imageContent-492-j5jxvaeo-m1.png",ETV Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=145' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_172/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="387" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18348-jcqpx9ns-v1/imageContent-18348-jcqpx9ns-m1.PNG",Star Maa Movies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=387' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/star-maa-movies hd/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="645" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23721-jg0fhacg-v2/imageContent-23721-jg0fhacg-m2.PNG",Tata Play English in Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=645' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_880/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1168" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPHLTE_Thumbnail-v5/TPHLTE_Thumbnail.png",Tata Play Hollywood Local Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1168' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6282183.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="388" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11553-j9julvag-v3/imageContent-11553-j9julvag-m6.png",Star Maa Gold' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=388' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/star-maa-gold/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="636" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21307-je859sm0-v1/imageContent-21307-je859sm0-m2.png",Zee Cinemalu HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=636' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_871/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="252" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee-Cinemalu-transparent.png",Zee Cinemalu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=252' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_416/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="268" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11182-j9i3o5pc-v2/imageContent-11182-j9i3o5pc-m2.png",ETV Life' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=268' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_538/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1073" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPTECL_Thumbnail-v1/TPTECL_Thumbnail.png",Tata Play Telugu Classics' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1073' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1887/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="358" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11417-j9jqpcnc-v1/imageContent-11417-j9jqpcnc-m1.png",ETV Abhiruchi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=358' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_536/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="128" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-426-j5jsm1wo-v1/imageContent-426-j5jsm1wo-m1.png",ETV Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=128' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_227/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="146" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-498-j5jy7i80-v1/imageContent-498-j5jy7i80-m1.png",ETV Andhra Pradesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=146' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_226/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="11" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-30-j5fc0v80-v2/imageContent-30-j5fc0v80-m2.png",TV9 Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=11' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_290/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="596" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12260-j9qv0lz4-v1/imageContent-12260-j9qv0lz4-m1.png",Sakshi TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=596' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_701/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="320" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11329-j9jot000-v2/imageContent-11329-j9jot000-m2.png",TV5 News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=320' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_802/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="957" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66770-kuwalqkg-v1/imageContent-66770-kuwalqkg-m1.png",Star Maa Movies HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=957' + '\n';
m3uStr += 'https://delta44tatasky.akamaized.net/out/i/1568869.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="225" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-951-j5mipdzs-v1/imageContent-951-j5mipdzs-m1.png",ABN Andhra Jyothy' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=225' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_295/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="160" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-586-j5kz3qkw-v1/imageContent-586-j5kz3qkw-m1.png",NTV Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=160' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_297/output/manifest.mpd?begin=20240513T010000&end=' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="954" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66595-kupdpd9k-v1/imageContent-66595-kupdpd9k-m1.png",Star Maa Gold' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=954' + '\n';
m3uStr += 'https://delta39tatasky.akamaized.net/out/i/5223418.mpd' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="274" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11194-j9i4cz80-v1/imageContent-11194-j9i4cz80-m1.png",V6 Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=274' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_810/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="363" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/f/fb/Star_Sports_Tamil.png/revision/latest/scale-to-width-down/340?cb=20170728072716" group-title=" Tamil",Star Sports 1 HD Tamil' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/451473.ts' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="45" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-132-j5fpedbs-v4/imageContent-132-j5fpedbs-m6.png",SONY YAY! Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://dv8r.short.gy/Sony_yay_tamil.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="49" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-145-j5fpfoe8-v1/imageContent-145-j5fpfoe8-m1.png",T News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=49' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_298/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="349" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11470-j9jr4uio-v1/imageContent-11470-j9jr4uio-m1.png",HM TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=349' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_566/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="525" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12002-j9nrtf08-v2/imageContent-12002-j9nrtf08-m2.png",Raj News Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=525' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_372/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="774" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47248-k1vn9ouw-v2/imageContent-47248-k1vn9ouw-m4.png",4tv News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=774' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_970/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="83" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-255-j5fz95pc-v1/imageContent-255-j5fz95pc-m1.png",ETV Telangana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=83' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_296/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1027" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73187-l8ou8wo8-v1/imageContent-73187-l8ou8wo8-m4.png",Swatantra TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1027' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1849/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="266" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-17564-jclrk6pk-v1/imageContent-17564-jclrk6pk-m1.png",10 TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=266' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_433/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="337" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11381-j9jq1pkg-v1/imageContent-11381-j9jq1pkg-m1.png",DD Saptagiri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=337' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_523/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1099" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PR9NEWS_Thumbnail-v2/PR9NEWS_Thumbnail.png",Prime 9 News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1099' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1910/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1100" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BGTVTEL_Thumbnail-v2/BGTVTEL_Thumbnail.png",BIG TV Telugu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1100' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1909/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="548" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11392-j9jq3lgw-v3/imageContent-11392-j9jq3lgw-m2.png",DD Yadagiri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=548' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_526/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1151" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MHNEWS_Thumbnail-v1/MHNEWS_Thumbnail.png",MAHAA NEWS' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1151' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1923/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1118" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/News360_Thumbnail-v3/News360_Thumbnail.png",News 360' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1118' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1920/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="541" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11688-j9kiz1zs-v1/imageContent-11688-j9kiz1zs-m1.png",Raj Musix Malayalam' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=541' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_686/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="445" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11745-j9kwb568-v2/imageContent-11745-j9kwb568-m3.png",Shubhavaarta TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=445' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_716/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="290" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11242-j9irisyw-v2/imageContent-11242-j9irisyw-m2.png",Bhakti TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=290' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_474/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="521" group-title="Tamil" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11960-j9lu9vow-v1/imageContent-11960-j9lu9vow-m1.png",Sun TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=521' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_760/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="351" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33495-jnqw9k9c-v4/imageContent-33495-jnqw9k9c-m5.png",Swara Sagar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=351' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_533/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="496" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11909-j9l52epk-v2/imageContent-11909-j9l52epk-m4.png",Star Vijay HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=496' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_818/output/manifest.mpd?begin=20240513T010000&end=' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="235" group-title=" Tamil" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VISUHD_Thumbnail-v1/VISUHD_Thumbnail.png",Star Vijay Super' + '\n';
m3uStr += 'https://dv8r.short.gy/Star_vijay_super.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="630" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18536-jct505dc-v2/imageContent-18536-jct505dc-m2.png",Hindu Dharmam' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=630' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_864/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="474" group-title="Tamil" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11837-j9kzms9s-v2/imageContent-11837-j9kzms9s-m3.png",Sun Life' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=474' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_756/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1167" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPHLT_Thumbnail-v4/TPHLT_Thumbnail.png",Tata Play Hollywood Local Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1167' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6282177.mpd' + '\n';




m3uStr += '#EXTINF:-1 tvg-id="608" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11997-j9lux9ig-v1/imageContent-11997-j9lux9ig-m5.png",Zee Tamil HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=608' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_842/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="285" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11224-j9iclykw-v1/imageContent-11224-j9iclykw-m2.png",Aradana TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=285' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_460/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="257" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee",Zee Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=257' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_429/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="674" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33814-jo5jba9s-v3/imageContent-33814-jo5jba9s-m3.PNG",Colors Tamil HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=674' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_916/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="418" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21152-je6orzfk-v1/imageContent-21152-je6orzfk-m1.png",Colors Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=418' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_665/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="708" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-38738-juc4a1ig-v5/imageContent-38738-juc4a1ig-m8.png",Jaya TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=708' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_947/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="200" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-819-j5m8fsfs-v1/imageContent-819-j5m8fsfs-m1.png",Kalaignar TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=200' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_344/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="997" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TONSTAM_Thumbnail-v6/TONSTAM_Thumbnail.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/5615195.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="426" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11679-j9khnqag-v1/imageContent-11679-j9khnqag-m1.png",Raj Digital Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=426' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_683/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="439" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11700-j9ksbotk-v1/imageContent-11700-j9ksbotk-m1.png",Raj TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=439' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_691/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="99" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44904-jzu8ri4o-v1/imageContent-44904-jzu8ri4o-m1.png",D Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=99' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_234/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="37" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-111-j5fl5xo8-v1/imageContent-111-j5fl5xo8-m1.png",Mega TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=37' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_347/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="723" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-41267-jwjjvrt4-v5/imageContent-41267-jwjjvrt4-m7.png",Tamil Naaptol' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=723' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025864.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="272" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11188-j9i480zc-v1/imageContent-11188-j9i480zc-m1.png",Polimer TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=272' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_674/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="392" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11565-j9jv0np4-v1/imageContent-11565-j9jv0np4-m1.png",Makkal TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=392' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_617/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="611" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12244-j9qq7k1c-v1/imageContent-12244-j9qq7k1c-m1.png",Sirippoli' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=611' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_717/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="380" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11536-j9jty5w8-v1/imageContent-11536-j9jty5w8-m1.png",KTV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=380' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_600/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="201" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-816-j5m8dqd4-v1/imageContent-816-j5m8dqd4-m1.png",J Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=201' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_345/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="659" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31187-jldgeg1k-v2/imageContent-31187-jldgeg1k-m2.png",Vendhar TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=659' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_815/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="797" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee",Zee Thirai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=797' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_989/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1182" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/transparentImages/Zee-THIRAI-WHITE-LOGO_2000_X_1125_Transpharent.png",Zee Thirai HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1182' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1962/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="444" group-title=" Lifestyle" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11724-j9kvwnkg-v1/imageContent-11724-j9kvwnkg-m1.png",Travelxp Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=444' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_789/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="499" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11900-j9l4vygg-v1/imageContent-11900-j9l4vygg-m1.png",Vasanth TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=499' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/6472180.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="220" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-882-j5mdrg4o-v1/imageContent-882-j5mdrg4o-m1.png",Puthiya Thalaimurai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=220' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_233/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="198" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-810-j5m84h14-v1/imageContent-810-j5m84h14-m1.png",Jaya Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=198' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_346/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="524" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11966-j9luich4-v1/imageContent-11966-j9luich4-m1.png",Thanthi TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=524' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_778/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="44" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-126-j5fnf4ig-v2/imageContent-126-j5fnf4ig-m2.png",Seithigal TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=44' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_349/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="509" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11942-j9lthi34-v1/imageContent-11942-j9lthi34-m1.png",Polimer News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=509' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_673/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="58" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-192-j5fsr3s0-v1/imageContent-192-j5fsr3s0-m1.png",News18 Tamil Nadu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=58' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_373/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="525" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12002-j9nrtf08-v2/imageContent-12002-j9nrtf08-m2.png",Raj News Tamil' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=525' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_372/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="702" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-37207-jswmhmpk-v1/imageContent-37207-jswmhmpk-m1.PNG",News J' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=702' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_943/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="455" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11764-j9kwqj6o-v1/imageContent-11764-j9kwqj6o-m1.png",Sathiyam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=455' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_711/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="968" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69018-kzo65wi0-v1/imageContent-69018-kzo65wi0-m2.png",News Tamil 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=968' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1794/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="391" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MAMUR_Thumbnail-v2/MAMUR_Thumbnail.png",MalaiMurasu Seithigal' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=391' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_618/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="199" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-807-j5m7zoyo-v1/imageContent-807-j5m7zoyo-m1.png",Jaya Max' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=199' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_350/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="425" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11682-j9khxjoo-v1/imageContent-11682-j9khxjoo-m1.png",Raj Musix' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=425' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_684/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="334" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11369-j9jpvzjs-v1/imageContent-11369-j9jpvzjs-m1.png",DD Podhigai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=334' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_519/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="400" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11583-j9jype8w-v3/imageContent-11583-j9jype8w-m3.png",Mega Musiq' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=400' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_624/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="647" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24578-jgotgry0-v1/imageContent-24578-jgotgry0-m1.png",Isaiaruvi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=647' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_578/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="390" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11562-j9juzmns-v1/imageContent-11562-j9juzmns-m1.png",Madha TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=390' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_614/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="411" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11616-j9k04eo0-v1/imageContent-11616-j9k04eo0-m1.png",Murasu TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=411' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_644/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="434" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11712-j9kt9fbs-v2/imageContent-11712-j9kt9fbs-m2.png",Jothi TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=434' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_699/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="490" group-title=" Telugu" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11882-j9l3qcrs-v1/imageContent-11882-j9l3qcrs-m1.png",SVBC 2' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=490' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_771/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="282" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11230-j9icx1i0-v1/imageContent-11230-j9icx1i0-m1.png",Angel TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=282' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_456/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="108" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-345-j5jmkws0-v2/imageContent-345-j5jmkws0-m4.png",Colors Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=108' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_157/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="612" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12249-j9qr87hc-v5/imageContent-12249-j9qr87hc-m5.png",Colors Kannada HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=612' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_490/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="492" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11883-j9l3rjzc-v1/imageContent-11883-j9l3rjzc-m1.png",Udaya TV HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=492' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_806/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="467" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11816-j9kz224o-v1/imageContent-11816-j9kz224o-m1.png",Star Suvarna HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=467' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_746/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="256" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11030-j8yk2g3s-v1/imageContent-11030-j8yk2g3s-m1.png",Zee Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=256' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_423/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="533" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18308-jcqnzl68-v1/imageContent-18308-jcqnzl68-m1.PNG",Colors SUPER' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=533' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_492/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="372" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12323-jaa5pzxs-v1/imageContent-12323-jaa5pzxs-m1.png",Jeevan TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=372' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/jeevan-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="675" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33827-jo5kcr1c-v4/imageContent-33827-jo5kcr1c-m5.png",Zee Kannada HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=675' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_917/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="231" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1002-j5nf74c0-v1/imageContent-1002-j5nf74c0-m1.png",Udaya Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=231' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_228/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="940" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65190-ktai1xtk-v1/imageContent-65190-ktai1xtk-m1.png",SIRIKANNADA Alltime' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=940' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1771/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="408" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11622-j9k0845k-v2/imageContent-11622-j9k0845k-m2.png",Nambikkai TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=408' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_651/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="566" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-45791-k0696crk-v3/imageContent-45791-k0696crk-m5.png",Kannada Naaptol' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=566' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025258.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="667" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31454-jmirfosw-v2/imageContent-31454-jmirfosw-m2.png",Colors Kannada Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=667' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_900/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="661" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31188-jldk0joo-v2/imageContent-31188-jldk0joo-m2.png",Public Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=661' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_894/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="810" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52310-k7bd8ixk-v2/imageContent-52310-k7bd8ixk-m4.png",Zee Picchar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=810' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1000/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="555" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11963-j9lui4rc-v3/imageContent-11963-j9lui4rc-m4.png",Asianet Suvarna News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=555' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_766/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="540" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12038-j9o0554o-v2/imageContent-12038-j9o0554o-m2.png",Star Suvarna Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=540' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_767/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="152" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-531-j5kuelug-v2/imageContent-531-j5kuelug-m2.png",TV9 Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=152' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_317/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="196" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-822-j5m8ivjs-v1/imageContent-822-j5m8ivjs-m1.png",Kasthuri' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=196' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_314/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="33" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-98-j5fjwu7s-v2/imageContent-98-j5fjwu7s-m3.png",Public TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=33' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_316/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1181" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZEPIHD_Thumbnail-v1/ZEPIHD_Thumbnail.png",Zee Picchar HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1181' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1960/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="85" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9824-j85wb88o-v1/imageContent-9824-j85wb88o-m1.png",News18 Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=85' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_229/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="824" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53941-kblrui1c-v3/imageContent-53941-kblrui1c-m3.png",Power TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=824' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1119/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="913" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NWS1ST_Thumbnail-v3/NWS1ST_Thumbnail.png",News 1st Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=913' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1320/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="510" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11948-j9ltrfc8-v1/imageContent-11948-j9ltrfc8-m1.png",Raj News Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=510' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_688/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="629" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-19066-jczvvocg-v1/imageContent-19066-jczvvocg-m1.png",TV5 Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=629' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_863/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="427" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11685-j9kipky0-v1/imageContent-11685-j9kipky0-m2.png",Raj Musix Kannada' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=427' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_685/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1116" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PRJAATV_Thumbnail-v2/PRJAATV_Thumbnail.png",Prajaa TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1116' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1919/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1077" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VISNEWS_Thumbnail-v2/VISNEWS_Thumbnail.png",Vistara News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1077' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1891/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="424" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11676-j9khi3cw-v1/imageContent-11676-j9khi3cw-m1.png",Public Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=424' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_679/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="321" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11338-j9jozdxs-v1/imageContent-11338-j9jozdxs-m1.png",DD Chandana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=321' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_506/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="477" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11788-j9kypa94-v1/imageContent-11788-j9kypa94-m2.png",Sri Sankara TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=477' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_728/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="107" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-340-j5jmiei0-v1/imageContent-340-j5jmiei0-m1.png",Colors Gujarati' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=107' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_211/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="971" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69020-kzo676so-v1/imageContent-69020-kzo676so-m1.png",SVBC 3' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=971' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1798/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="772" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47224-k1uh5c4g-v2/imageContent-47224-k1uh5c4g-m2.png",Tata Play Gujarati Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=772' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_967/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="489" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11874-j9l376yg-v2/imageContent-11874-j9l376yg-m2.png",TV9 Gujarati' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=489' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_803/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="692" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35306-jqxwmaeo-v1/imageContent-35306-jqxwmaeo-m2.png",Colors Gujarati Cinema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=692' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_934/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="586" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12167-j9phnio0-v2/imageContent-12167-j9phnio0-m2.png",Sandesh News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=586' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_712/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="303" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11281-j9j4lf3k-v1/imageContent-11281-j9j4lf3k-m1.png",CNBC Bajaar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=303' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_487/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="552" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12068-j9o9t9jc-v1/imageContent-12068-j9o9t9jc-m1.png",Gujarat Samachar TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=552' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_292/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="6" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-15-j5f97j2o-v4/imageContent-15-j5f97j2o-m3.png",News18 Gujarati' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=6' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_291/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="73" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-228-j5fxgzio-v2/imageContent-228-j5fxgzio-m2.png",ABP Asmita' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=73' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_378/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="507" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11924-j9l5fs6w-v3/imageContent-11924-j9l5fs6w-m3.png",Zee 24 Kalak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=507' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_833/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="660" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11257-j9iy8oj4-v2/imageContent-11257-j9iy8oj4-m2.png",Ayush TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=660' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_893/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="654" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-26589-jj9w5h54-v1/imageContent-26589-jj9w5h54-m2.png",India News Gujarat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=654' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_987/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="974" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/1STGUJ_Thumbnail-v2/1STGUJ_Thumbnail.png",1st Gujarat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=974' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1803/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="891" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61443-kmbf79yw-v1/imageContent-61443-kmbf79yw-m1.png",Mantavya News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=891' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/mantavya-news/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1087" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PRVEG_Thumbnail-v3/PRVEG_Thumbnail.png",PRAVEG' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1087' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1899/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="497" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11912-j9l58n8w-v2/imageContent-11912-j9l58n8w-m4.png",VTV News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=497' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_821/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="978" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69926-l1ooghuw-v3/imageContent-69926-l1ooghuw-m3.png",Sidharth TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=978' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1808/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="115" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-355-j5jndjn4-v1/imageContent-355-j5jndjn4-m2.png",Colors Oriya' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=115' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_215/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="323" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11341-j9jpdu00-v1/imageContent-11341-j9jpdu00-m1.png",DD Girnar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=323' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_507/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1097" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ASTHAGUJ_Thumbnail-v2/ASTHAGUJ_Thumbnail.png",Aastha Gujarati' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1097' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1908/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="597" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12207-j9qlt5vk-v2/imageContent-12207-j9qlt5vk-m2.png",Zee Sarthak' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=597' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_709/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="421" group-title=" Tamil" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11667-j9kdkb6w-v1/imageContent-11667-j9kdkb6w-m1.png",Peppers TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=421' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_671/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="376" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12271-j9to48zc-v1/imageContent-12271-j9to48zc-m2.png",Kanak News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=376' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/kanak-news/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="375" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11513-j9jtooug-v1/imageContent-11513-j9jtooug-m1.png",Kalinga TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=375' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/kalinga-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1170" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SIDGL_Thumbnail-v1/SIDGL_Thumbnail.png",Sidharth GOLD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1170' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1952/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="41" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13243-jbirprzs-v1/imageContent-13243-jbirprzs-m1.png",News18 Odia' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=41' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_337/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="333" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11366-j9jpvkw0-v1/imageContent-11366-j9jpvkw0-m1.png",DD Odia' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=333' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_518/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="448" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11733-j9kw4100-v4/imageContent-11733-j9kw4100-m4.png",News7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=448' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_676/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1169" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JJAG_Thumbnail-v1/JJAG_Thumbnail.png",Jay Jagannath' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1169' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1951/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="292" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11246-j9iw5g74-v3/imageContent-11246-j9iw5g74-m3.png",Asianet HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=292' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_464/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="230" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1005-j5nfiy9c-v1/imageContent-1005-j5nfiy9c-m1.png",Surya TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=230' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_212/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="294" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11254-j9ixwlcg-v1/imageContent-11254-j9ixwlcg-m1.png",Asianet Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=294' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_467/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="684" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9003-j7rlh2aw-v2/imageContent-9003-j7rlh2aw-m2.png",Zee Keralam' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=684' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_926/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="694" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35312-jqy146c8-v3/imageContent-35312-jqy146c8-m8.png",Zee Keralam HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=694' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_933/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="10" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-27-j5fbpbbs-v1/imageContent-27-j5fbpbbs-m1.png",Flowers' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=10' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_318/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="805" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49597-k6k8ts8g-v2/imageContent-49597-k6k8ts8g-m2.png",Nandighosha TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=805' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_993/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="907" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62573-kop7duow-v6/imageContent-62573-kop7duow-m9.png",Argus News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=907' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1314/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="395" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11577-j9jv8mqg-v1/imageContent-11577-j9jv8mqg-m1.png",Mazhavil Manorama HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=395' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod3catchup.akamaized.net/bpk-tv/irdeto_com_Channel_621/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="904" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62245-kny89ag0-v2/imageContent-62245-kny89ag0-m2.png",Malayalam Naaptol' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=904' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/malayalam-naaptol/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="25" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33-j5fc5fko-v1/imageContent-33-j5fc5fko-m1.png",Kairali TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=25' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_319/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="178" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-762-j5m21xqw-v1/imageContent-762-j5m21xqw-m1.png",Amrita TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=178' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_325/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="553" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12065-j9o9phqg-v1/imageContent-12065-j9o9phqg-m1.png",We TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=553' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_322/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="229" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1008-j5nfqjeo-v1/imageContent-1008-j5nfqjeo-m1.png",Surya Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=229' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_243/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="953" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66564-kup0jo0w-v1/imageContent-66564-kup0jo0w-m3.png",Asianet Plus' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=953' + '\n';
m3uStr += 'https://delta43tatasky.akamaized.net/out/i/2034251.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="293" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11251-j9ixmaz4-v1/imageContent-11251-j9ixmaz4-m1.png",Asianet Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=293' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_465/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="532" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12020-j9ntf12w-v1/imageContent-12020-j9ntf12w-m1.png",Asianet News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=532' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_466/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="436" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11709-j9kt6bg0-v1/imageContent-11709-j9kt6bg0-m1.png",Safari TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=436' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_698/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="211" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-855-j5ma1eig-v2/imageContent-855-j5ma1eig-m2.png",Kairali News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=211' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_323/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="933" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64891-ks8v01o8-v1/imageContent-64891-ks8v01o8-m2.png",Asianet Movies' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=933' + '\n';
m3uStr += 'https://delta31tatasky.akamaized.net/out/i/29273.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="87" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-279-j5jcwqts-v1/imageContent-279-j5jcwqts-m2.png",Manorama News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=87' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_244/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="66" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12309-ja9ac8n4-v1/imageContent-12309-ja9ac8n4-m1.png",News18 Kerala' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=66' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_374/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="394" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11572-j9jv7wi0-v1/imageContent-11572-j9jv7wi0-m1.png",Mathrubhumi News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=394' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_620/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="31" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-90-j5fjv4hk-v1/imageContent-90-j5fjv4hk-m1.png",Mazhavil Manorama' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=31' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_320/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="576" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12137-j9p7pmeo-v2/imageContent-12137-j9p7pmeo-m2.png",Media One' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=576' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_321/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="370" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11495-j9jtg2ns-v2/imageContent-11495-j9jtg2ns-m2.png",Jaihind TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=370' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_581/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="428" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11694-j9kjc0tc-v1/imageContent-11694-j9kjc0tc-m1.png",Raj News Malayalam' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=428' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_689/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="799" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49022-k5lxarmw-v2/imageContent-49022-k5lxarmw-m2.png",Twenty Four' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=799' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_990/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="270" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11179-j9i3nhs8-v2/imageContent-11179-j9i3nhs8-m3.png",Janam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=270' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_584/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="378" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11524-j9jtu07c-v2/imageContent-11524-j9jtu07c-m2.png",Kaumudy TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=378' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/kaumudy-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="541" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11688-j9kiz1zs-v1/imageContent-11688-j9kiz1zs-m1.png",Raj Musix Malayalam' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=541' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_686/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="377" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11520-j9jtr0y8-v1/imageContent-11520-j9jtr0y8-m1.png",Kappa TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=377' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/kappa-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="269" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11176-j9i3lv54-v2/imageContent-11176-j9i3lv54-m2.png",Goodness' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=269' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_555/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1124" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RETV_Thumbnail-v2/RETV_Thumbnail.png",Reporter TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1124' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1922/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="348" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35638-jruyxl0g-v4/imageContent-35638-jruyxl0g-m7.PNG",Harvest TV 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=348' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_559/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="571" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-68739-kywk7vq0-v1/imageContent-68739-kywk7vq0-m1.png",Tata Play Punjab De Rang' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=571' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_799/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="122" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/PTC_Punjabi.png",PTC Punjabi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=122' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_216/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="773" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/PTC_Simran.png",PTC Simran' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=773' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_968/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="457" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11772-j9kwsqns-v1/imageContent-11772-j9kwsqns-m1.png",Shalom TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=457' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_714/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="356" group-title=" Malayalam" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11449-j9jqxsns-v1/imageContent-11449-j9jqxsns-m1.png",God TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=356' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_554/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="796" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49009-k5g6nid4-v1/imageContent-49009-k5g6nid4-m1.png",Zee Punjabi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=796' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_988/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="998" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TONSPUN_Thumbnail-v4/TONSPUN_Thumbnail.png" group-title="",Tata Play Toons+' + '\n';
m3uStr += 'https://delta13tatasky.akamaized.net/out/i/5616001.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="399" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11586-j9jyt26w-v1/imageContent-11586-j9jyt26w-m1.png",MH One' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=399' + '\n';
m3uStr += 'https://delta14tatasky.akamaized.net/out/i/8025875.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="794" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/PTC_Punjabi_Gold.png",PTC Punjabi Gold' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=794' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_985/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1083" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TABHIT_Thumbnail-v2/TABHIT_Thumbnail.png",TABBAR HITS' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1083' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1895/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="580" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12155-j9pd5ug8-v1/imageContent-12155-j9pd5ug8-m1.png",Zee Punjab Haryana Himachal Pradesh' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=580' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_838/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="624" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12931-jb64agig-v1/imageContent-12931-jb64agig-m1.png",Pitaara TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=624' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_855/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="91" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-300-j5ji8seo-v1/imageContent-300-j5ji8seo-m1.png",PTC News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=91' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_246/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="366" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INWPUB_Thumbnail-v2/INWPUB_Thumbnail.jpg",India News Punjab' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=366' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_573/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="232" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1011-j5ng33kg-v2/imageContent-1011-j5ng33kg-m2.png",News18 Punjab Haryana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=232' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_313/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="13" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8968-j7rcix2w-v1/imageContent-8968-j7rcix2w-m1.png",India News Haryana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=13' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_280/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="401" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11587-j9jyvxl4-v1/imageContent-11587-j9jyvxl4-m1.png",MH One News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=401' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_626/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="262" group-title=" Odia" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35649-jrz9mhq0-v2/imageContent-35649-jrz9mhq0-m2.PNG",Zee Delhi NCR Haryana' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=262' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_428/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="787" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48498-k3zd4bsg-v1/imageContent-48498-k3zd4bsg-m3.png",ANB NEWS' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=787' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_979/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="972" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69238-kzt9ig3k-v1/imageContent-69238-kzt9ig3k-m2.png",Khabar Fast' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=972' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1801/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1085" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/WTVPunjabi_Thumbnail-v1/WTVPunjabi_Thumbnail.png",WPN World Punjabi TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1085' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1898/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="989" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71064-l427mi60-v2/imageContent-71064-l427mi60-m3.png",STV Haryana News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=989' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1817/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="92" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-297-j5ji8qv4-v1/imageContent-297-j5ji8qv4-m1.png",PTC Chak De' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=92' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_245/output/manifest.mpd?begin=20240513T010000&end=' + '\n';
m3uStr += 'https://cbqh.short.gy/bjtech_PTC_Chakde.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="335" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11374-j9jpwgiw-v1/imageContent-11374-j9jpwgiw-m1.png",DD Punjabi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=335' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_520/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1078" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DAILYP_Thumbnail-v3/DAILYP_Thumbnail.png",Daily Post Punjab Haryana Himachal' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1078' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1892/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="936" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PUNHTS_Thumbnail-v1/PUNHTS_Thumbnail.png",Punjabi Hits' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=936' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1334/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="922" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-63498-kqq89g5k-v2/imageContent-63498-kqq89g5k-m3.png",PTC Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=922' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1322/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="2010" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://media.ptcplay.com/uploads/channel/A-142x142.png?bf=0&f=jpg&p=true&q=85&w=250" ,PTC Dhol' + '\n';
m3uStr += 'https://cbqh.short.gy/bjtech_PTC_Dhol.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="371" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11502-j9jtlmi8-v3/imageContent-11502-j9jtlmi8-m4.png",Janta TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=371' + '\n';
m3uStr += 'https://tataplay.dinesh29.com.np/live/tataplay/janta-tv/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="193" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Chardikla_Time_TV.png",Chardikla Time TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=193' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_339/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="793" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57445-kg7p5yk8-v2/imageContent-57445-kg7p5yk8-m3.png",Living India News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=793' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod1catchup.akamaized.net/bpk-tv/irdeto_com_Channel_984/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="567" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12106-j9ooxpug-v2/imageContent-12106-j9ooxpug-m2.png",Nepal 1' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=567' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod2catchup.akamaized.net/bpk-tv/irdeto_com_Channel_657/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="368" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11485-j9jsysqw-v1/imageContent-11485-j9jsysqw-m1.png",Indradhanu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=368' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_576/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="214" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-860-j5mao56o-v1/imageContent-860-j5mao56o-m1.png",Rengoni TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=214' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_332/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="101" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-333-j5jl5q6o-v1/imageContent-333-j5jl5q6o-m1.png",Rang' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=101' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_214/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="353" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11411-j9jqocds-v1/imageContent-11411-j9jqocds-m1.png",DY 365' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=353' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_534/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="226" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-956-j5mipkxs-v1/imageContent-956-j5mipkxs-m1.png",NEWS LIVE' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=226' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_334/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="68" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12390-jai3fgy0-v1/imageContent-12390-jai3fgy0-m1.png",News18 Assam North East' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=68' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_375/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="221" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-879-j5mdmlqw-v1/imageContent-879-j5mdmlqw-m1.png",Protidin Time' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=221' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_335/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="423" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11673-j9kfe73s-v1/imageContent-11673-j9kfe73s-m1.png",Prag News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=423' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_675/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="894" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NKTVPLUS_Thumbnail-v2/NKTVPLUS_Thumbnail.png",NKTV PLUS' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=894' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1303/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="417" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11644-j9k1gjow-v1/imageContent-11644-j9k1gjow-m1.png",North East Live' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=417' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_664/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="977" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69824-l1dfgvcg-v1/imageContent-69824-l1dfgvcg-m3.png",ND24-Newsdaily.in' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=977' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1806/output/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1076" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NBNEWS_Thumbnail-v2/NBNEWS_Thumbnail.png",NB News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1076' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1890/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1115" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PTKB_Thumbnail-v1/PTKB_Thumbnail.png",Pratham Khabar 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1115' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1918/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="449" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11728-j9kw1zp4-v1/imageContent-11728-j9kw1zp4-m1.png",Ramdhenu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=449' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_692/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="331" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11363-j9jprc40-v1/imageContent-11363-j9jprc40-m1.png",DD North East' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=331' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod4catchup.akamaized.net/bpk-tv/irdeto_com_Channel_516/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="325" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11345-j9jpidkw-v1/imageContent-11345-j9jpidkw-m1.png",DD Kashir' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=325' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod6catchup.akamaized.net/bpk-tv/irdeto_com_Channel_509/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="912" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62613-koxw351c-v1/imageContent-62613-koxw351c-m1.png",Haryana Beats' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=912' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1201.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Mastiii.png" group-title=" Music",Masti Music ' + '\n';
m3uStr += 'https://d35j504z0x2vu2.cloudfront.net/v1/manifest/0bc8e8376bd8417a1b6761138aa41c26c7309312/mastiii/75d18606-c9ea-41df-883d-2f4d5db9fc35/0.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="790" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48807-k4m7ud0o-v2/imageContent-48807-k4m7ud0o-m2.png",Ek Onkar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=790' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1357.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="991" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71497-l4stx05k-v3/imageContent-71497-l4stx05k-m5.png",DD Meghalaya' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=991' + '\n';
m3uStr += 'https://tsdevil.shodns.in/tplay/ch.php?ts=https://bpprod7catchup.akamaized.net/bpk-tv/irdeto_com_Channel_1819/output/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="791" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48804-k4m7nz2w-v1/imageContent-48804-k4m7nz2w-m1.png",Fateh TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=791' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1147.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="807" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49633-k6lny7mw-v1/imageContent-49633-k6lny7mw-m1.png",In Goa 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=807' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1175.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="806" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49636-k6lo3yfc-v1/imageContent-49636-k6lo3yfc-m1.png",Boogle Bollywoodhttps://cable19tataplay.akamaized.net/booglebollywood/774e3ea9f3fa9bcdac47f445b83b6653.sdp/index.m3u8' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=806' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="782" group-title=" Kannada" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47615-k2jwaqug-v1/imageContent-47615-k2jwaqug-m3.png",Namma TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=782' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1205.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="781" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47612-k2jw4vfc-v1/imageContent-47612-k2jw4vfc-m4.png",Prudent' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=781' + '\n';
m3uStr += 'https://cable21tataplay.akamaized.net/prudentm.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="866" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57969-khu0zsnc-v1/imageContent-57969-khu0zsnc-m1.png",Tara News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=866' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1231.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="865" group-title=" Bengali" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BBHAKTI_Thumbnail-v3/BBHAKTI_Thumbnail.png",Bangla Bhakti' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=865' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1211.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="123" group-title="Bengali" tvg-logo="https://i.postimg.cc/fLrwFw4Q/Green-TV.jpg",Green TV HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Green_tv' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id=ts1669 tvg-logo="https://upload.wikimedia.org/wikipedia/en/b/b3/Sun_Bangla.png" group-title="Bengali",Sun Bangla ' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=1669' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title="Bengali" tvg-logo="https://www.lyngsat.com/logo/tv/ss/sun-bangla-cinema-in.png",Sun Bangla Cinema' + '\n';
m3uStr += 'https://live.sunbanglacinema.in/sunbanglacinema/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="" group-title="Bengali" tvg-logo="https://d3jnkp3lrs2hd5.cloudfront.net/images/100x100/299fb7b1-571b-4c1f-85c2-b7e18954db48.jpg",Aamar Digital' + '\n';
m3uStr += 'https://live-stream.utkalbongo.com/utkalbongo/stream2/hls/amarbanglatwolivestream.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="18452" group-title="Bengali" tvg-country="IN" tvg-logo="https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.rtstsportsbd.rtsaiful/37e74dce-dbf6-11eb-8c00-734831dc9cc4/640",T SPORTS HD' + '\n';
m3uStr += 'https://aadi-tg.000webhostapp.com/api/star.php?aadi=18452' + '\n';


m3uStr += '#EXTINF:-1 group-title="Bengali" tvg-logo="https://i.ibb.co/xh1M5D8/IMG-20240320-115340.jpg",RTV Music' + '\n';
m3uStr += 'https://raw.githubusercontent.com/gift4bd/ytm/main/RTVMusic.m3u8' + '\n';


m3uStr += '#EXTINF:-1 group-title="Bengali" tvg-logo="https://i.postimg.cc/SNQqCqyh/1708ecea-d867-423c-9743-2aabefcd8ecc.jpg",Mon TV Bangla' + '\n';
m3uStr += 'https://live-stream.utkalbongo.com/utkalbongo/stream7/hls/montvlivestream.m3u8' + '\n';


m3uStr += '#EXTINF:-1 group-title="Bengali" tvg-logo="https://i.ibb.co/ynYtDv8/IMG-20240126-111745.png",Nobanno TV' + '\n';
m3uStr += 'https://livess.jagobd.com.bd/cZMLmVyX3RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/cmtv.stream/live-orgin/cmtv.stream/chunks.m3u8' + '\n';


m3uStr += '#EXTINF:-1 group-title="Bengali" tvg-logo="https://i.postimg.cc/vZc6kZRJ/Sananda-TV-Logo.jpg",Sananda TV' + '\n';
m3uStr += 'https://fr.tvanondo.online/sananda/video.m3u8' + '\n';


m3uStr += '#EXTINF:-1 group-title="Bengali" tvg-logo="https://i.postimg.cc/Z51VChst/IMG-20240308-055223.jpg",Bangla+ HD' + '\n';
m3uStr += 'https://live-stream.utkalbongo.com/hls/livebanglatvstream.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="887" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60927-kljn2znc-v1/imageContent-60927-kljn2znc-m1.png",Garv Gurbani' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=887' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1155.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="908" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62599-koxtswe0-v1/imageContent-62599-koxtswe0-m2.png",Nimbark TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://legitpro.co.in/nimbarktv/nimbarktvbox/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="883" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60933-kljn4c9c-v1/imageContent-60933-kljn4c9c-m1.png",Swar Shree' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=883' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1460.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="910" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62607-koxuikrs-v1/imageContent-62607-koxuikrs-m1.png",C News Bharat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=910' + '\n';
m3uStr += 'https://cable18tataplay.akamaized.net/cnews/cnews/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="893" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61633-kmlgwaww-v1/imageContent-61633-kmlgwaww-m2.png",Valam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=893' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1378.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="846" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56399-kfesi49c-v1/imageContent-56399-kfesi49c-m1.png",Haryanvi Hits' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=846' + '\n';
m3uStr += 'https://cable6tatasky.akamaized.net/haryanvihits/8b04821feb065f68858c15c98f4ec736.sdp/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="847" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56402-kfesiz4g-v1/imageContent-56402-kfesiz4g-m1.png",Krishna Vani' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=847' + '\n';
m3uStr += 'https://cable7tatasky.akamaized.net/KRISHNAVAANI/cdb4d5121f9b2fa38a5e58ce4284414e.sdp/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="819" group-title=" Marathi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53443-kanbrwjs-v1/imageContent-53443-kanbrwjs-m1.png",RDX Goa' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=819' + '\n';
m3uStr += 'https://g5nl6xoalpq6-hls-live.5centscdn.com/rdxgoa/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist_dvr.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="841" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MAHAK_Thumbnail-v3/MAHAK_Thumbnail.png",Mahakaleshwar Temple, Ujjain' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=841' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1299.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="931" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64523-krkg6p88-v1/imageContent-64523-krkg6p88-m1.png",Green Chillies TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=931' + '\n';
m3uStr += 'https://cable5tatasky.akamaized.net/live/GreenChillies_Playout-Main/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="185" group-title=" Entertainment" tvg-country="IN" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/84/Nazara_TV_logo.png",Nazara TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=185' + '\n';
m3uStr += 'https://epiconvh.s.llnwi.net/live/nazara/master.m3u8' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="947" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65977-ku6g2hko-v3/imageContent-65977-ku6g2hko-m3.png",Live Patna Sahib Patna' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=947' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/496.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="949" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65985-ku6gly6w-v3/imageContent-65985-ku6gly6w-m3.png",Live Sri Naga Sai Mandir Coimbatore' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=949' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1347.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1256" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OYEMUS_Thumbnail-v3/OYEMUS_Thumbnail.png",Oye Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1256' + '\n';
m3uStr += 'https://cable67tataplay.akamaized.net/OyeMusic/myStream/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="892" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61629-kmlgw3yw-v2/imageContent-61629-kmlgw3yw-m5.png",Samara News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=892' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/767.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1254" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NationalNewsLive_Thumbnail-v2/NationalNewsLive_Thumbnail.png",National News Live' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1254' + '\n';
m3uStr += 'https://cable65tataplay.akamaized.net/NationalNewsLive/myStream/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1257" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANGAMTV_Thumbnail-v1/SANGAMTV_Thumbnail.png",Sangam TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1257' + '\n';
m3uStr += 'https://cable70tataplay.akamaized.net/stream/dash/sangam.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1255" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/UpdateIndia_Thumbnail-v2/UpdateIndia_Thumbnail.png",Update India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1255' + '\n';
m3uStr += 'https://cable66tataplay.akamaized.net/UpdateIndia/myStream/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="845" group-title=" Punjabi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56404-kfet9quw-v1/imageContent-56404-kfet9quw-m1.png",Wah Punjabi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=845' + '\n';
m3uStr += 'https://cable8tatasky.akamaized.net/wahpunjabi/45f5bff56a47f9ebb68595aac72db8b0.sdp/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="960" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67700-kwoeo240-v2/imageContent-67700-kwoeo240-m2.png",Atmadarshan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=960' + '\n';
m3uStr += 'https://cable27tataplay.akamaized.net/atmadarshan/atmadarshan/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="962" group-title=" Hindi" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67709-kwogo2pc-v1/imageContent-67709-kwogo2pc-m1.png",ANN News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=962' + '\n';
m3uStr += 'https://cable25tataplay.akamaized.net/annnews/annnews/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="961" group-title=" Gujarati" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67703-kwog27o0-v1/imageContent-67703-kwog27o0-m1.png",Lakshya TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=961' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1316.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1008" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72306-l6hr8log-v1/imageContent-72306-l6hr8log-m1.png",Shri ISKCON Girgaon, Mumbai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1008' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/910.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1004" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72303-l6hqin9k-v1/imageContent-72303-l6hqin9k-m2.png",Shri Ganga Aarti, Varanasi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1004' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/905.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1006" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72312-l6hsvue8-v1/imageContent-72312-l6hsvue8-m2.png",Shri Mahalaxmi Temple, Mumbai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1006' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/920.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1019" group-title=" Music" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73019-l8gzpnjs-v1/imageContent-73019-l8gzpnjs-m1.png",7x Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1019' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1331.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="8434" group-title=" Music" tvg-country="IN" tvg-logo="https://dl.dropboxusercontent.com/scl/fi/z0gs0pyic715xmuj62vee/Vision_Beats.png?rlkey=8txbctd8mv1msylmg2rx9g9lf&st=auppiule&dl=0",Vision Beats HD' + '\n';
m3uStr += 'https://dv8r.short.gy/Vision_beats.m3u8' + '\n';
m3uStr += '#EXTINF:-1 group-title=" Music" tvg-logo="https://i.postimg.cc/W4HgmcY3/logo.png",Joo Music' + '\n';
m3uStr += 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8' + '\n';

m3uStr += '#EXTINF:-1 group-title=" Music" tvg-logo="https://seeklogo.com/images/V/V2_Music-logo-748411A5C2-seeklogo.com.png",V2 Beats' + '\n';
m3uStr += 'https://de1se01.v2beat.live/playlist.m3u8' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="441" group-title=" Music" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/9x_Jhakaas.png",9x Jhakaas' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=441' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=441' + '\n';

m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="732" group-title=" Music" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/9X_Tashan.png",9X Tashan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=732' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=732' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1005" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72315-l6htmt2o-v1/imageContent-72315-l6htmt2o-m2.png",Shri Babulnaath Temple, Mumbai' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1005' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1468.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1007" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72309-l6hro3js-v1/imageContent-72309-l6hro3js-m2.png",Shri Ashtavinayak Mahaganpati, Ranjangaon' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1007' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/915.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1040" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JANS_Thumbnail-v1/JANS_Thumbnail.png",Jansetu' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1040' + '\n';
m3uStr += 'https://jansetutataplay.akamaized.net/hls10/jansetunews/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1023" group-title=" Knowledge" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73014-l8gzok74-v2/imageContent-73014-l8gzok74-m4.png",Daiji World TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1023' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1183.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1002" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72161-l60vjz1c-v3/imageContent-72161-l60vjz1c-m3.png",Saileela TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1002' + '\n';
m3uStr += 'https://187021-castr.akamaized.net/63046dd479bf9eaea38be612/live_28b1f6c022da11edb8c5f521cef5f1c7/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1043" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NAKD_Thumbnail-v1/NAKD_Thumbnail.png",Nakshatra Digital' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1043' + '\n';
m3uStr += 'https://nakshatratataplay.akamaized.net/nakshatradigital/nakshatradigital/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1060" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/LIVPU_Thumbnail-v1/LIVPU_Thumbnail.png",Live Punjabi' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1060' + '\n';
m3uStr += 'https://cable15tataplay.akamaized.net/livepunjabi/livepunjabi/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1057" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/GOPUTV_Thumbnail-v1/GOPUTV_Thumbnail.png",Global Punjab TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1057' + '\n';
m3uStr += 'https://cable13tataplay.akamaized.net/globalpunjab/globalpunjab/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1044" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/GBIN_Thumbnail-v1/GBIN_Thumbnail.png",Global India' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1044' + '\n';
m3uStr += 'https://globalindia.akamaized.net/globalindiatv/globalindiatv/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1041" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TVP_Thumbnail-v1/TVP_Thumbnail.png",TV Punjab' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1041' + '\n';
m3uStr += 'https://hls.tvpunjab.com/stream/deb10bae362f810630ec3abedcae5894.sdp/chunks.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1079" group-title=" News" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TTN24_Thumbnail-v2/TTN24_Thumbnail.png",TTN 24' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1079' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1327.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1018" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73022-l8gzppv4-v1/imageContent-73022-l8gzppv4-m1.png",Real News Keralahttps://bk7l298nyx53-hls-live.5centscdn.com/realnews/e7dee419f91aa9e65939d3677fb9c4f5.sdp/playlist.m3u8' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1018' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1080" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/UBANTV_Thumbnail-v1/UBANTV_Thumbnail.png",U Bangla TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1080' + '\n';
m3uStr += 'https://ubangla.akamaized.net/hls/ubangla.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1058" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/AAJKK_Thumbnail-v1/AAJKK_Thumbnail.png",Aaj Ki Khabar' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1058' + '\n';
m3uStr += 'https://cable14tataplay.akamaized.net/aajkikhabar/aajkikhabar/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1070" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MEDI9_Thumbnail-v1/MEDI9_Thumbnail.png",MEDIA 9' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1070' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1445.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1059" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INDNWS_Thumbnail-v1/INDNWS_Thumbnail.png",Indian News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1059' + '\n';
m3uStr += 'https://cable12tataplay.akamaized.net/indiannews/index.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1042" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BLSTV_Thumbnail-v1/BLSTV_Thumbnail.png",Bless TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1042' + '\n';
m3uStr += 'https://blesstvtataplay.akamaized.net/blesstv/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1171" group-title=" Spiritual" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SIBM_Thumbnail-v4/SIBM_Thumbnail.png",Shree Ichchhapuran Balaji Mandir' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1171' + '\n';
m3uStr += 'https://delta45tatasky.akamaized.net/out/i/1412.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1197" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMNIL_Thumbnail-v1/EKMNIL_Thumbnail.png",Ekamra Nilachakra' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1197' + '\n';
m3uStr += 'https://cable33tataplay.akamaized.net/nilachakra/nilachakra/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1201" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMPRM_Thumbnail-v1/EKMPRM_Thumbnail.png",Ekamra Paramatma' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1201' + '\n';
m3uStr += 'https://cable41tataplay.akamaized.net/paramatma/paramatma/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1196" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMBHO_Thumbnail-v1/EKMBHO_Thumbnail.png",Ekamra Bharat Odia' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1196' + '\n';
m3uStr += 'https://cable31tataplay.akamaized.net/bharat/bharat/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1199" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMUS_Thumbnail-v1/EKMUS_Thumbnail.png",Ekamra  Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1199' + '\n';
m3uStr += 'https://cable37tataplay.akamaized.net/musiq/musiq/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1202" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMOPS_Thumbnail-v1/EKMOPS_Thumbnail.jpg",Ekamra One paschima' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1202' + '\n';
m3uStr += 'https://cable43tataplay.akamaized.net/onepaschima/onepaschima/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1200" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMJAT_Thumbnail-v1/EKMJAT_Thumbnail.png",Ekamra Jatra' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1200' + '\n';
m3uStr += 'https://cable39tataplay.akamaized.net/jatra/jatra/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1198" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMCYN_Thumbnail-v1/EKMCYN_Thumbnail.png",Ekamra Cynema' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1198' + '\n';
m3uStr += 'https://cable35tataplay.akamaized.net/cynema/cynema/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1203" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24X7_Thumbnail-v1/IN24X7_Thumbnail.png",India 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1203' + '\n';
m3uStr += 'https://cable45tataplay.akamaized.net/india24x7/india24x7/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1244" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NBHARAT_Thumbnail-v1/NBHARAT_Thumbnail.png",N Bharat' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1244' + '\n';
m3uStr += 'https://cable64tataplay.akamaized.net/Nbharat/Nbharat/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1245" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NATTODAY24X7_Thumbnail-v1/NATTODAY24X7_Thumbnail.png",National Today 24x7' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1245' + '\n';
m3uStr += 'https://cable59tataplay.akamaized.net/cmaf/nationaltoday24/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1206" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMBCS_Thumbnail-v1/EKMBCS_Thumbnail.png",Ekamra Baiscope' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1206' + '\n';
m3uStr += 'https://cable51tataplay.akamaized.net/baiscope/baiscope/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1207" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMMNR_Thumbnail-v1/EKMMNR_Thumbnail.png",Ekamra Manoranjan' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1207' + '\n';
m3uStr += 'https://cable53tataplay.akamaized.net/manoranjan/manoranjan/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1208" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMHCL_Thumbnail-v2/EKMHCL_Thumbnail.png",News 8 odia' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1208' + '\n';
m3uStr += 'https://cable55tataplay.akamaized.net/halchal/halchal/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1204" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/CITYM_Thumbnail-v1/CITYM_Thumbnail.png",City Music' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1204' + '\n';
m3uStr += 'https://cable47tataplay.akamaized.net/citymusic/citymusic/index.mpd' + '\n';



m3uStr += '#EXTINF:-1 tvg-id="1205" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OMM_Thumbnail-v1/OMM_Thumbnail.png",Omm' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1205' + '\n';
m3uStr += 'https://cable49tataplay.akamaized.net/omm/omm/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1209" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKSNWS_Thumbnail-v1/EKSNWS_Thumbnail.png",Ekamra snews' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1209' + '\n';
m3uStr += 'https://cable57tataplay.akamaized.net/snews/snews/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1247" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/35MM_Thumbnail-v1/35MM_Thumbnail.png",35 MM' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1247' + '\n';
m3uStr += 'https://cable63tataplay.akamaized.net/live6/35mm/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1246" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VANDEBHNEWS_Thumbnail-v1/VANDEBHNEWS_Thumbnail.png",Vande Bharat News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1246' + '\n';
m3uStr += 'https://cable60tataplay.akamaized.net/vandebharat/vandebharat/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1243" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MARHNDTV_Thumbnail-v1/MARHNDTV_Thumbnail.png",Marudharhind TV' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1243' + '\n';
m3uStr += 'https://cable61tataplay.akamaized.net/marudharhind24/marudharhind24/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1242" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24NEWS_Thumbnail-v1/IN24NEWS_Thumbnail.png",In24 News' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1242' + '\n';
m3uStr += 'https://cable62tataplay.akamaized.net/in24news/in24news/index.mpd' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1253" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JEEWBHAKTI_Thumbnail-v2/JEEWBHAKTI_Thumbnail.png",Jeewan Bhakti' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1253' + '\n';
m3uStr += 'https://cable69tataplay.akamaized.net/JeewanBhakti/myStream/manifest.mpd?begin=20240513T010000&end=' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="1252" group-title=" Others" tvg-country="IN" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HARBUZ_Thumbnail-v2/HARBUZ_Thumbnail.png",Haryana Buzz' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=1252' + '\n';
m3uStr += 'https://cable68tataplay.akamaized.net/HaryanaBuzz/myStream/manifest.mpd?begin=20240513T010000&end=' + '\n';



m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/jp.php?contentID=&key' + '\n';
m3uStr += '#EXTINF:-1 tvg-id="165" group-title="Airtel Alternative" tvg-country="IN" tvg-logo="https://jiotv.catchup.cdn.jio.com/dare_images/images/Zee_Cinema_HD.png",Zee Cinema HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_type=clearkey' + '\n';
m3uStr += '#KODIPROP:inputstream.adaptive.license_key=https://play.denver1769.in/KeyLelo.php?id=165' + '\n';
m3uStr += 'https://rftv.wtf/tp/jp.mpd?contentID=165' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="2004" group-title="Airtel Alternative" tvg-country="IN" tvg-logo="https://www.indiantvinfo.com/media/2022/10/Sony-MAX2-New-Logo.png",Sony Max2 HD' + '\n';
m3uStr += 'http://premiumdedi.one:80/live/Jubilant7Relative/xmb1HEJBsY/451347.ts' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="474" group-title="Airtel Alternative" tvg-country="IN" tvg-logo="https://www.indiantvinfo.com/media/2022/10/Sony-PAL-New-Logo.png",Sony pal HD' + '\n';
m3uStr += '#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36' + '\n';
m3uStr += 'https://dai.google.com/linear/hls/event/dhPrGRwDRvuMQtmlzppzQQ/master.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="ardinesh-wtc05-819" tvg-logo="" group-title="Airtel Alternative",Star Gold Select HD' + '\n';
m3uStr += 'https://atv-tv.vercel.app/api/xtv.php?id=109960' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="ardinesh-wtc05-611" tvg-logo="" group-title="Airtel Alternative",& Xplor HD' + '\n';
m3uStr += 'https://atv-tv.vercel.app/api/xtv.php?id=109964' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="ardinesh-wtc05-951" tvg-logo="" group-title="Airtel Alternative",& Prive HD' + '\n';
m3uStr += 'https://atv-tv.vercel.app/api/xtv.php?id=109963' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="star_share" group-title="Airtel Alternative",& FLIX HD' + '\n';
m3uStr += 'https://atv-tv.vercel.app/api/xtv.php?id=109962' + '\n';



m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/WzYzcj4M/Avatar-the-Last-Airbender.jpg", Avatar The Last Airbender' + '\n';
m3uStr += 'https://iptv.000webhostapp.com/api/stalker.php?id=37635' + '\n';


m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/XqHxCZst/Batman-The-Animated-Series.jpg", Batman The Animated Series' + '\n';
m3uStr += 'https://iptv.000webhostapp.com/api/stalker.php?id=37679' + '\n';


m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/dQ45XXJn/Batman-The-Brave-and-the-Bold.jpg", Batman The Brave and the Bold' + '\n';
m3uStr += 'https://iptv.000webhostapp.com/api/stalker.php?id=37690' + '\n';


m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/t4xGt6L3/Captain-Planet-and-the-Planeteers.jpg", Captain Planet and the Planeteers' + '\n';
m3uStr += 'https://da.gd/cptpfreetv' + '\n';


m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/MKKt08jq/Disney-Movies.jpg", Disney Movies' + '\n';
m3uStr += 'https://da.gd/dsmvfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/TYNVxLNW/Dora-the-Explorer.jpg", Dora the Explorer' + '\n';
m3uStr += 'https://da.gd/doexfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/QNJRhzdV/Doraemon-247.jpg", Doraemon' + '\n';
m3uStr += 'https://dv8r.short.gy/Doraemon.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58409" group-title="24X7 KIDS" tvg-country="IN" tvg-logo="https://static.wikia.nocookie.net/dreamlogos/images/0/08/ShinChan-82694-2.png/revision/latest/scale-to-width-down/220?cb=20170717185335", SHINCHAN' + '\n';
m3uStr += 'https://dv8r.short.gy/Shinchan.m3u8' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58392" tvg-logo="https://i1.sndcdn.com/artworks-UNz65cyRiSiwWF0r-G4ynXQ-t500x500.jpg" group-title="24X7 KIDS", NINJA HATTORI RETURNS-2012' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=58608' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58396" group-title="24X7 KIDS" tvg-country="IN" tvg-logo="https://i1.sndcdn.com/artworks-UNz65cyRiSiwWF0r-G4ynXQ-t500x500.jpg", NINJA HATTORI HINDI' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=58612' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="59791" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Oggy_and_the_Cockroaches_Logo.webp/600px-Oggy_and_the_Cockroaches_Logo.webp.png" group-title="24X7 KIDS", OGGY AND THE COCKROACHES' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=59997' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58416" group-title="24X7 KIDS" tvg-country="IN" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Ben_10_Ultimate_Alien_logo.svg/400px-Ben_10_Ultimate_Alien_logo.svg.png", BEN 10 ULTIMATE ALIEN HINDI' + '\n';
m3uStr += 'https://iptv.000webhostapp.com/api/stalker.php?id=37756' + '\n';


m3uStr += '#EXTINF:-1 tvg-id="58419" tvg-logo="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/440px-Ben10Omniverse.svg.png" group-title="24X7 KIDS", BEN 10 OMNIVERSE HINDI' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=58635' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58426" group-title="24X7 KIDS" tvg-country="IN" tvg-logo="https://static.wikia.nocookie.net/logopedia/images/b/bc/Ben_10_logo.svg/revision/latest/scale-to-width-down/250?cb=20170818022938", BEN 10 CLASSIC HINDI' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=58642' + '\n';

m3uStr += '#EXTINF:-1 tvg-id="58422" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ben_10_Alien_Force_logo.svg/400px-Ben_10_Alien_Force_logo.svg.png" group-title="24X7 KIDS", BEN 10 ALIEN FORCE HINDI' + '\n';
m3uStr += 'http://tgaadi-web.tech/api/tg_aadi.php?tv=58638' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/qqs3WwD8/Dragon-Ball-Z.jpg", Dragon Ball Z' + '\n';
m3uStr += 'https://da.gd/drbzfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/SKLjSRfh/Dream-Works-Animation.jpg", DreamWorks Animation' + '\n';
m3uStr += 'https://da.gd/dwamfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/MTKstcsZ/Duck-Tales.jpg", DuckTales' + '\n';
m3uStr += 'https://da.gd/dutlfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/V6tYPFnk/Kung-Fu-Panda.jpg", Kung Fu Panda' + '\n';
m3uStr += 'https://da.gd/kfpnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/ydqyDv5Z/Lego-Star-Wars.jpg", Lego Star Wars' + '\n';
m3uStr += 'https://da.gd/lgswfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/R08JhhWp/Marvel-s-Avengers-Assemble.jpg", Marvel Avengers Assemble' + '\n';
m3uStr += 'https://da.gd/mvaafreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/wxW8mNqB/Mickey-Mouse-Clubhouse.jpg", Mickey Mouse Clubhouse' + '\n';
m3uStr += 'https://da.gd/mmchfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/T2NrXRqZ/mrbean.jpg", Mr. Bean' + '\n';
m3uStr += 'https://da.gd/mrbnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/G3Px20CP/Pinky-and-the-Brain.jpg", Pinky and The Brain' + '\n';
m3uStr += 'https://da.gd/patbfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/5NBzg80w/Pok-mon.jpg", Pokemon' + '\n';
m3uStr += 'https://da.gd/pkmnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/wM2nh01w/Scooby-Doo.jpg", Scooby-Doo' + '\n';
m3uStr += 'https://da.gd/scdofreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/wM2nh01w/Scooby-Doo.jpg", Scooby-Doo Classic' + '\n';
m3uStr += 'https://da.gd/sdocfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/mkGqHK8x/Spider-Man.jpg", Spider-Man' + '\n';
m3uStr += 'https://da.gd/spmnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/W1HjBfYg/Sponge-Bob-Square-Pants.jpg", SpongeBob SquarePants' + '\n';
m3uStr += 'https://da.gd/sbspfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/KjRL7wM8/Teen-Titans-Go.jpg", Teen Titans Go!' + '\n';
m3uStr += 'https://da.gd/ttgofreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/m2c76mLF/Teenage-Mutant-Ninja-Turtles.jpg", Teenage Mutant Ninja Turtles' + '\n';
m3uStr += 'https://da.gd/tmntfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/jq92DZRv/The-Batman.jpg", The Batman' + '\n';
m3uStr += 'https://da.gd/tbmnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/x1jLR6bH/The-Flintstones.jpg", The Flintstones' + '\n';
m3uStr += 'https://da.gd/tflnfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/85d0vy63/The-Pink-Panther.jpg", The Pink Panther' + '\n';
m3uStr += 'https://da.gd/tpptfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/wxQvYFXZ/tom-and-jerry-PNG42.jpg", Tom & Jerry Classic' + '\n';
m3uStr += 'https://da.gd/tmjrfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/Qxr01Lkd/Toy-Story.jpg", Toy Story' + '\n';
m3uStr += 'https://da.gd/tystfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/15wCgmkt/Transformers-Animated.png", Transformers Animated' + '\n';
m3uStr += 'https://da.gd/tfmrfreetv' + '\n';

m3uStr += '#EXTINF:-1 group-title="24X7 KIDS" tvg-logo="https://i.postimg.cc/ZKNN401f/X-Men.jpg", X-Men' + '\n';
m3uStr += 'https://da.gd/xmenfreetv' + '\n';
    // let lines = await m3uStr.split('\n');
    // for (let i = 0; i < chansList.length; i++) {
    //     for (let j = 0; j < lines.length; j++) {
    //             const line = lines[j];
    //             // Check if the line contains tvg-id="id"
    //             if (line.includes(`https://play.denver1769.in/KeyLelo.php?id=${chansList[i].id}`)) {
    //                 // If found, update the URL on the next line
    //                         let stringWithQuotes = chansList.clearkey;

    //                         if (stringWithQuotes !== null) {
    //                             let stringWithoutQuotes = stringWithQuotes.replace(/^"(.*)"$/, '$1');
    //                             lines[j] = `#KODIPROP:inputstream.adaptive.license_key=${stringWithoutQuotes}`;
    //                             break;
    //                         }
    //                     lines[j] = `#KODIPROP:inputstream.adaptive.license_key=${chansList.clearkey}`;
    //                     break;
    //                 }
    //             }
    //         }
    // m3uStr = await lines.join('\n');
    //     console.log('all done!');
    return m3uStr;
};

export default async function handler(req, res) {
    let uData = {
        tsActive: true
    };

    if (uData.tsActive) {
        let m3uString = await generateM3u(uData);
        res.status(200).send(m3uString);
    }
}
