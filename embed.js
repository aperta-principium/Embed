import {videoCheck, documentCheck, musicCheck, textCheck, testImage, vimYTvalidate} from './checks.js';

/**
 * @param  {} url
 * @param  {} el="#embed" - HTML selector
 */
export function embed(url, el = "#embed") {

  function record(url, result) {
    if (result == "success") {
      $("#imgShow").attr("src", `https://interclip.app/proxy?url=${url}`);
    } else {
      $("#imgShow").hide();
    }
  }

  if (videoCheck(url)) {
    document.querySelector(el).innerHTML = 
      `<video id="player" width="100%" playsinline controls><source src="${url}" id="videoSource"/></video>`;
  } else {
    $("#player").hide();
  }

  if (documentCheck(url)) {
    document.querySelector(el).innerHTML = 
      "<iframe id='documentEmbed' width='100%' height='623px' frameborder='0'>";
    $("#documentEmbed").attr(
      "src",
      `https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`
    );
  } else {
    $("#documentEmbed").hide();
  }

  if (musicCheck(url)) {
    document.querySelector(el).innerHTML = `<audio controls><source src="${url}"></audio> `;
  }
  if (textCheck(url)) {
    document.querySelector(el).load(url);
  }

  testImage(url, record);
  vimYTvalidate(url);
}
