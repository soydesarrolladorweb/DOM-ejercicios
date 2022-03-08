const d = document,
 w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = (entries) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            w.addEventListener("visibilitychange", (e)=> 
             d.visibilityState === "visible"
              ? entry.target.play()
              : entry.target.pause()
           );
        });
    } 
    const obverser = new IntersectionObserver(cb, {
        threshold: [0.5, 0.75],
    });

    $videos.forEach(el => obverser.observe(el));
}