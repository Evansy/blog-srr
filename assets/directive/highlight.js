export default function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        window.hljs && window.hljs.highlightBlock(block)
    });
}