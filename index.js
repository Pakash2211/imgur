let currentPage = 1;
let limit = 20;

const debounce=()=>{
    
}

const main = document.querySelector('.container');
const displayData = (data) => {



    data.map((res, idx) => {

        const imgs = `https://picsum.photos/200/300?random=${idx + 1}`;
        // console.log(res.images);
        // const imgs = "https://financerewind.com/wp-content/uploads/2020/12/maxresdefault-12.jpg";

        if (!imgs) {
            return;
        }
        let str = "" + res.views
        if (str.length >= 3) {
            let str2 = str.substring(0, str.length - 3) + "k";
            res.views = str2;

        }


        let gallary = `
    <div>  
    <img src ="${imgs}" />
    <div class="tbottom">
    <div class="settitle">
    <p>${res.title}<p>
     </div>

    
    <div class="clpart">
      <div class="part1">
      <img src="img/upvote.svg" />
      <p>${res.ups}</P>
      <img src= "img/upvote.svg" />
      </div>

      <div class="part2">
      <img src="img/comment_icon.svg"  />
      <p>${res.favorite_count}</p>
      </div>
       
      <div class="part3">
      <img src="img/views_icon.svg" />
      <p>${res.views}</p>
      </div>

    </div>
    </div>
    </div>
`
        // console.log(res);

        let mdiv = document.createElement('div');
        //   let img = document.createElement('img');
        //   img.src=imgs;
        //   let h = document.createElement('h2');
        //   h.innerText = res.title;
        //        mdiv.append(img,h);
        mdiv.innerHTML = gallary;
        main.append(mdiv);
    })

}


const getData = async () => {
    const url = `https://img-clone.herokuapp.com/data?_page=${currentPage}&_limit=${limit}`;
    try {

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {

    }

}



const showData = () => {
    setTimeout(() => {
        currentPage++;
        getData();
    }, 200)
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollHeight <= scrollTop + clientHeight) {
        showData();
    }
})

getData();
