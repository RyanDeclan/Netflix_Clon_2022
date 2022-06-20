import { useEffect, useState } from "react";
import styled, {createGlobalStyle} from "styled-components";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`


const Body = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: #bd979f;
` 
	


const Scene = styled.div`
    width: 100%;
    position: relative;
    height: 86%;
    background: #daacae;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    perspective: 500px;
` 

const Mirror = styled.div`
    width: 280px;
    height: 580px;
    position: relative;
    box-shadow: 16px 2px 10px rgba(0, 0, 0, 0.4);
    perspective: 500px;
    border-top-left-radius: 300px;
    border-top-right-radius: 300px;
    transform-origin: top center;
    transform: rotateX(3deg);
    cursor: pointer;

    ::hover {
        opacity: 0.4;
	    transform: translateY(4px);
    }
`
	
const MirrorContent = styled(motion.div)<{ data : string }>`
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${(props)=>(props.data)});
    background-position: center center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    box-shadow: inset 6px 3px 10px rgba(0, 0, 0, 0.4);
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border: 6px solid #e7e4df;
    z-index: 0;
    display: flex;
    justify-content: center;

    ::before {
        position: absolute;
        content: "「 ｃｌｉｃｋ ｍｅ 」";
        font-family: sans-serif;
        text-transform: uppercase;
        color: #e7e4df;
        font-weight: bold;
        letter-spacing: 4px;
        font-size: 10px;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
        text-align: center;
        bottom: 0;
        z-index: 100;
        opacity: 0.6;
        transition: all 0.5s ease;
        padding: 18px 0;

    }
    ::before{
        opacity: 0.4;
	    transform: translateY(4px);
    } 
` ;


/* .item {
	position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
} */

const Plant = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/CZaKIJ63jjlgvDcdjcjUnlfpffRScIiXzi4HMrpLAsM/rs:fit:728:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjM2/L2RkMzRmMzVhLWVk/YmMtNDRlZi1hOGNm/LTZlZjJlMTBlMzU2/My5wbmc.png);
    width: 500px;
    height: 620px;
    bottom: -26px;
    margin-right: 400px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 
	


const Plant2 = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/E47kcuNp_3-4IrDybcMwr6zMELcbhBQLKzImj-ot8E4/rs:fit:855:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzE5/LzljNjEwNjJhLTk4/YmMtNDViMS1iZGVm/LTMwNzVjMTMxYjQ1/OC5wbmc.png);
    width: 300px;
    height: 320px;
    bottom: -50px;
    margin-right: 300px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 

const Plant3 = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/oo4nsgAN74wL_FDHCUIwOdB3rPN6SGavRjxiz-1ds4s/rs:fit:1201:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTk0/LzVlMGQ1NjhlLWNh/NTEtNGJlNC1iNWEz/LTQyYTcwNDlmZGMy/My5wbmc.png);
    width: 160px;
    height: 125px;
    bottom: -50px;
    margin-left: 380px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 
const Books = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/AUAdQ5eK8APXniP0hwVusHWtZRMk9FA2Jm9FSza1StY/rs:fit:850:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNy9j/NTcxMWIzNC1mMTYy/LTQ3MTAtOGExYi1l/YzY1M2FlN2IwYWYu/cG5n.png);
    width: 200px;
    height: 220px;
    bottom: -40px;
    margin-left: 620px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 

const Apple = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/-O2SifADepTOg7bXJ5whR6wB0iMfq5y7vrIaJdmKp20/rs:fit:851:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODYy/L2M3MjBkM2Q3LWMw/NTgtNDJkOC04ZGEw/LTc2MTM1N2YwMmNh/OC5wbmc.png);
    width: 64px;
    height: 70px;
    top: -64px;
    left: 30px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 

const Clock = styled.div`
    background-image: url(https://ouch-cdn2.icons8.com/ggxsAQVGAa4GMIlNl6vMuk0ANcEK07E5woeRpplKofI/rs:fit:945:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzI0/L2RmMDQzMzc4LTcy/NTUtNDA5My04ZDQy/LTgxOTJjNmE2ZmQx/ZC5wbmc.png);
    width: 170px;
    height: 170px;
    background-size: 100% auto;
    background-position: left top;
    bottom: 520px;
    margin-left: 440px;

    position: absolute;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: left top;
	pointer-events: none;
` 

const Icon = styled(motion.div)`
    background-image: url(https://static.toss.im/assets/homepage/simplicity21/phase2/apng-ex.png);
    background-size: 100% auto;
    background-position: left top;
    width: 100px;
    height: 100px;
    
    
`   
const iconVariants = {
        normal: {
          scale: 1,
        },
        hover: {
        
          scale: 1.3,
          transition: { delay: 0.1, type: "tween", duration: 0.3 },
        },
      };


const Box = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: -120px;

`

const Text = styled.div`
    width: 200px;
    height: 100px;
    display:flex;
    justify-content: start;
    align-items:center;
`



let current = 0
let count = 0

function PreHome() {
    const images = [
        "https://media.giphy.com/media/JnvHE3lTHPr3WrSsrl/giphy.gif",   
        "https://media.giphy.com/media/LnRmXE9bpqUZeDDjJm/giphy.gif",	
        "https://media.giphy.com/media/b8V0suHz0TElFjw7UZ/giphy-downsized-large.gif",
        "https://media.giphy.com/media/IdfeWkDKwwFCA1m2vq/giphy.gif",
        "https://media.giphy.com/media/LUxb7CR3QSKeB4Hxy8/giphy.gif",
        "https://media.giphy.com/media/MXZFGnPXiSGKCpVT2Y/giphy.gif",
        "https://media.giphy.com/media/ZQvsOGVnsbB7vaYNIo/giphy.gif",
        "https://media.giphy.com/media/1BfTVXD4pPIpSQpANd/giphy.gif",
        "https://media.giphy.com/media/oy4cqsHi7yXMEsmjl0/giphy-downsized-large.gif", 
        "https://media.giphy.com/media/TH6bbxgTaeJ87OA991/giphy-downsized-large.gif",
        "https://media.giphy.com/media/fXiZ8d1a8DKKr3j9l1/giphy.gif",
        "https://media.giphy.com/media/9TLRp8xNvNILZf8Bw6/giphy.gif"
        ];
        
        const [data, setData] =useState("https://data.whicdn.com/images/251238216/original.gif")
        const onClick = ()=> {
            setData(images[++current % images.length])
            count++
        }
        useEffect(() => {
            if(current > 4){

            }

        },[]);
    return (
    <>
        <Body>
            
            
            <Scene>
                <Plant></Plant>
                <Mirror onClick={onClick} >
                    <MirrorContent data ={data}></MirrorContent>
                </Mirror>
                <Plant2></Plant2>
                <Books>
                    <Apple></Apple>
                </Books>
                <Plant3></Plant3>
                <Clock></Clock>
                {count > 3 ?
               
                <Link to="home" style={{position: "absolute",
                    bottom: "-130px"}}>
                        <Icon 
                        variants={iconVariants} 
                        whileHover="hover"  
                        initial="normal" 
                        transition={{ type: "tween" }}
                        >  
                        </Icon>
                </Link>   
                        
                    
                
                 : null
                }
               
            </Scene>
            
        
        </Body>
        
    </>
    );
}
  
export default PreHome;