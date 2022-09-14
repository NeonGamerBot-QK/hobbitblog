import JSONData from "./assets/data.json"
import pfp from "./assets/pfp.jpg";
import oger from "./assets/oger.jpeg";
import over from "./assets/bilbover.jpeg";
const makeHashtags = (str) => {
    return str.split(/ +/).map((d) => {
        if(d.startsWith("#")) {
return (<a href="">{" "} {d} {" "}</a>)
        }
        else if(d.startsWith("@") ) {
return (<span style={{ color: "white" }}> {" "}{d} {" "}</span>)    
        }
        else {
            return (<> {d} </>)
        }
    })
}
export const posts = [...JSONData].map((a) => {
    let author = a.author ? a.author : { name: a.author_name, src: a.author_src } 
    let link = a.link ? a.link : { name: a.link_name, href: a.link_src } 
    const rcontent = (a.content)
    const content = a.content ? (typeof a.content === "string" ? () => makeHashtags(rcontent) : a.content) : () => ""
    const img = a.img ? a.img : { src: a.img_src, alt: a.img_alt || "" } 
    a.img = img;
    a.author = author;
    a.link = link;
a.content = content;
if(a.author.src === "REPLACE ME") a.author.src = pfp;
if(a.img.src === "ogerimg") a.img.src = oger;
if(a.img.src === "bilbover") a.img.src = over;
    return a;
})
export const tags = ["newtosocialmedia", "bombor", "theif", "hobbit"]
// for(var i =0; i<11;i++) {
//     // const i  = i;
//     posts.push({
//         author: {name: `Author ${i}`, src:    `http://http.cat/${400+i}`},
//         img: { src:    `http://http.cat/${400+i}`, 
//         // height: 300, width: 100,  
//         // style: { height: "300px", width: "500px", margin: 0 },
//         alt: i.toString()
//     },
//         content: () => (((i * 1000) ** Math.random()) ** Math.PI).toFixed(100),
//         title: "Title " + i,    
//         date: new Date().toLocaleString().split(",")[0],
//         link: { name: "saahild", href: "https://saahild.com"}
//     })
// }    
// for (var i = 0; i < 100;i++) {
//     tags.push(i)
// }