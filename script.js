  const kataKata = [
            "“makasi ya suami tante seneng”", "“luber lumer gimana gituch 🥵”", 
            "“gede banget 🥵”", "“gak tahan pgn trs 🥵”", 
            "“kok seenak itu zihhh...”", "“kranci kranci gimana gtuh”", 
            "“anget anget bikin nyaman 🥵”", "“renyah, kriyuk, weunak bingitsz”", 
            "“guyih, lejat, begiz”", "“gjls enk bgt”", 
            "“belum sigma kalo belum coba”", "“kalian kalo skibidi mewing wajib coba”"
        ];

        document.querySelectorAll('.marquee-content').forEach((content, index) => {
            const randomText = () => kataKata
                .sort(() => Math.random() - 0.5) 
                .slice(0, 5) 
                .join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); 

            content.innerHTML = `${randomText()} &nbsp; ${randomText()} &nbsp; ${randomText()}`;

            if (index % 2 === 0) {
                content.style.animationDirection = 'normal';
            } else {
                content.style.animationDirection = 'reverse'; 
            }
        });