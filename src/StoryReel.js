import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            { /* Story */}
            <Story
            image="https://qph.fs.quoracdn.net/main-qimg-2bbd5da3248db79e2ae5a0ae7f788851"
            profileSrc="https://omnitos.com/wp-content/uploads/2021/08/whatspaper-177.jpg"
            title="Mikey"
            />

            <Story
            image="http://narutozrt.synthasite.com/resources/naruto2.jpg"
            profileSrc="https://media.comicbook.com/2020/08/naruto-creator-success-1233687-1280x0.jpeg"
            title="Uzumaki Naruto"
            />

            <Story
            image="https://animehunch.com/wp-content/uploads/2021/06/a412b1344e2a1bf02c273854edc370ea.jpg"
            profileSrc="https://pbs.twimg.com/media/E4-3I1hX0AcOmJS.jpg"
            title="Gojo Saturo"
            />

            <Story
            image="https://www.nicepng.com/png/detail/166-1667894_roronoa-zoro-render-18-by-roronoaroel-on-deviantart.png"
            profileSrc="https://c4.wallpaperflare.com/wallpaper/332/915/762/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg"
            title="zoro"
            />

            <Story
            image="https://i.ytimg.com/vi/6hVtyd7Isds/maxresdefault.jpg"
            profileSrc="https://i.pinimg.com/originals/15/37/a7/1537a76c07952bbe69da01b8086a5f00.png"
            title="Asta"
            />
        </div>
    )
}

export default StoryReel
