import Image from 'next/image'
import styles from '../page.module.css'


const data = [
    {
        title: "Image 1",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 2",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 3",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 4",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 5",
        url: '/enitio_2022.png',
    },
    {
        title: "Image 6",
        url: '/ntu_logo.jpeg',
    },
];

export default function PastEvents() {
  return (
    <main className={styles.past_events}>
        <div className={styles.past_events__header}>
            <p> PAST EVENTS </p>
        </div>
        <div className={styles.past_events__picture_grid}>
        {data.map((item, index) => (
          <div key={index}>
            <div className={styles.past_events__imagebox}>
                <div 
                    className={styles.past_events__image}
                    style = {{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.99) 0%, rgba(0, 0, 0, 0) 50%), url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    />
                <p className={styles.past_events__image_title}>{item.title}</p>
            </div>
          </div>
        ))}
        </div>
    </main>
  )
}
