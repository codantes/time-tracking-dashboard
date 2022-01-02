fetch("./data.json").then(function(resolve){
    return resolve.json();
}).then( (data) => {
    var info = data;
    console.log(info);

    const dailyBtn = document.querySelector("#daily");
    dailyBtn.addEventListener("click", function(){
        let currentWork = document.querySelector("#current-work");
        currentWork.innerHTML = info[0].timeframes.daily.current + "hr";
        let previousWork = document.querySelector("#previous-work");
        previousWork.innerHTML = "yesterday " + info[0].timeframes.daily.previous + "hr"

        let currentplay = document.querySelector("#current-play");
        currentplay.innerHTML = info[1].timeframes.daily.current + "hr";
        let previousPlay = document.querySelector("#previous-play");
        previousPlay.innerHTML = "yesterday " + info[1].timeframes.daily.previous + "hr"

        let currentstudy = document.querySelector("#current-study")
        currentstudy.innerHTML = info[2].timeframes.daily.current + "hr";
        let previousStudy = document.querySelector("#previous-study");
        previousStudy.innerHTML = "yesterday " + info[2].timeframes.daily.previous + "hr"

        let currentexr = document.querySelector("#current-exr");
        currentexr.innerHTML = info[3].timeframes.daily.current + "hr";
        let previousExr = document.querySelector("#previous-exr");
        previousExr.innerHTML = "yesterday " + info[3].timeframes.daily.previous + "hr"

        let currentSoc = document.querySelector("#current-soc");
        currentSoc.innerHTML = info[4].timeframes.daily.current + "hr";
        let previousSoc = document.querySelector("#previous-soc");
        previousSoc.innerHTML = "yesterday " + info[4].timeframes.daily.previous + "hr"

        let currentSelf = document.querySelector("#current-self");
        currentSelf.innerHTML = info[5].timeframes.daily.current + "hr";
        let previousSelf = document.querySelector("#previous-self");
        previousSelf.innerHTML = "yesterday " + info[5].timeframes.daily.previous + "hr"
    });

    const weeklyBtn = document.querySelector("#weekly");
    weeklyBtn.addEventListener("click", function(){
        let currentWork = document.querySelector("#current-work");
        currentWork.innerHTML = info[0].timeframes.weekly.current + "hr";
        let previousWork = document.querySelector("#previous-work");
        previousWork.innerHTML = "last week " + info[0].timeframes.weekly.previous + "hr"

        let currentplay = document.querySelector("#current-play");
        currentplay.innerHTML = info[1].timeframes.weekly.current + "hr";
        let previousPlay = document.querySelector("#previous-play");
        previousPlay.innerHTML = "last week  " + info[1].timeframes.weekly.previous + "hr"

        let currentstudy = document.querySelector("#current-study")
        currentstudy.innerHTML = info[2].timeframes.weekly.current + "hr";
        let previousStudy = document.querySelector("#previous-study");
        previousStudy.innerHTML = "last week  " + info[2].timeframes.weekly.previous + "hr"

        let currentexr = document.querySelector("#current-exr");
        currentexr.innerHTML = info[3].timeframes.weekly.current + "hr";
        let previousExr = document.querySelector("#previous-exr");
        previousExr.innerHTML = "last week " + info[3].timeframes.weekly.previous + "hr";

        let currentSoc = document.querySelector("#current-soc");
        currentSoc.innerHTML = info[4].timeframes.weekly.current + "hr";
        let previousSoc = document.querySelector("#previous-soc");
        previousSoc.innerHTML = "last week " + info[4].timeframes.weekly.previous + "hr";

        let currentSelf = document.querySelector("#current-self");
        currentSelf.innerHTML = info[5].timeframes.weekly.current + "hr";
        let previousSelf = document.querySelector("#previous-self");
        previousSelf.innerHTML = "last week " + info[5].timeframes.weekly.previous + "hr";
    });

    const monthlyBtn = document.querySelector("#monthly");
    monthlyBtn.addEventListener("click", function(){
        let currentWork = document.querySelector("#current-work");
        currentWork.innerHTML = info[0].timeframes.monthly.current + "hr";
        let previousWork = document.querySelector("#previous-work");
        previousWork.innerHTML = "last month " + info[0].timeframes.monthly.previous + "hr"

        let currentplay = document.querySelector("#current-play");
        currentplay.innerHTML = info[1].timeframes.monthly.current + "hr";
        let previousPlay = document.querySelector("#previous-play");
        previousPlay.innerHTML = "last month " + info[1].timeframes.monthly.previous + "hr"

        let currentstudy = document.querySelector("#current-study")
        currentstudy.innerHTML = info[2].timeframes.monthly.current + "hr";
        let previousStudy = document.querySelector("#previous-study");
        previousStudy.innerHTML = "last month " + info[2].timeframes.monthly.previous + "hr"

        let currentexr = document.querySelector("#current-exr");
        currentexr.innerHTML = info[3].timeframes.monthly.current + "hr";
        let previousExr = document.querySelector("#previous-exr");
        previousExr.innerHTML = "last month " + info[3].timeframes.monthly.previous + "hr";

        let currentSoc = document.querySelector("#current-soc");
        currentSoc.innerHTML = info[4].timeframes.monthly.current + "hr";
        let previousSoc = document.querySelector("#previous-soc");
        previousSoc.innerHTML = "last month " + info[4].timeframes.monthly.previous + "hr";

        let currentSelf = document.querySelector("#current-self");
        currentSelf.innerHTML = info[5].timeframes.monthly.current + "hr";
        let previousSelf = document.querySelector("#previous-self");
        previousSelf.innerHTML = "last month " + info[5].timeframes.monthly.previous + "hr";
    })

   
});
