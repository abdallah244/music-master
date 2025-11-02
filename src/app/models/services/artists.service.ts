import { Injectable } from '@angular/core';

export interface Artist {
  id: number;
  name: string;
  type: 'arabic' | 'international';
  image: string;
  genre: string;
  bio: string;
  lifeStory: string;
  topSongs: string[];
  birthDate: string;
  nationality: string;
  popularity: number;
  awards?: string[];
  socialMedia?: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  albums?: Album[];
  similarArtists?: number[];
}

export interface Album {
  id: number;
  title: string;
  year: number;
  coverImage: string;
  songs: string[];
  genre: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artists: Artist[] = [
    // Arabic Artists
    {
      id: 1,
      name: 'Amr Diab',
      type: 'arabic',
      image: 'OIP (2).webp',
      genre: 'Pop, Mediterranean',
      bio: 'The Father of Mediterranean Music',
      lifeStory: `Amr Diab was born on October 11, 1961, in Port Said, Egypt. He began his musical career at a young age, winning several local competitions. His breakthrough came with his album "Ya Tariq" in 1988. Known for innovating Mediterranean music, he has won numerous World Music Awards and is recognized in Guinness World Records for best-selling Middle Eastern artist. Diab revolutionized Arabic pop music by blending traditional Arabic melodies with Western rhythms and electronic music.`,
      topSongs: [
        'Tamally Maak',
        'Nour El Ein',
        'Wala Ala Balo',
        'El Alem Allah',
        'Habibi',
        'Ana Aktar Wahed',
        'Wayah',
        'Leily Nahary',
        'El Donia Helwa'
      ],
      birthDate: '1961-10-11',
      nationality: 'Egyptian',
      popularity: 98,
      awards: [
        '7 World Music Awards',
        'Guinness World Record',
        'Best Arab Act - MTV Europe'
      ],
      socialMedia: {
        youtube: 'https://youtube.com/amrdiab',
        instagram: 'https://instagram.com/amrdiab',
        facebook: 'https://facebook.com/amrdiab'
      },
      similarArtists: [2, 3, 4]
    },
    {
      id: 2,
      name: 'Adele',
      type: 'international',
      image: 'OIP.webp',
      genre: 'Pop, Soul',
      bio: 'Adele biography',
      lifeStory: `Early Life (1988-2006)
Adele Laurie Blue Adkins was born on May 5, 1988, in Tottenham, London. Raised by her young mother, she developed a passion for singing early on, inspired by artists like Ella Fitzgerald and The Spice Girls. She attended the BRIT School for Performing Arts & Technology, graduating in 2006.

Breakthrough with "19" (2007-2008)
A friend posted her demo on Myspace, which led to a record deal with XL Recordings. Her debut album, 19, was released in 2008. Named for her age when she wrote most songs, it introduced the world to her soulful voice and heartfelt songwriting, fueled by the breakout hit "Chasing Pavements."

Global Superstardom with "21" (2009-2011)
Inspired by a painful breakup, her second album, 21 (2011), became a global phenomenon. Hits like "Rolling in the Deep" and "Someone Like You" dominated charts worldwide. The album broke numerous records, becoming one of the best-selling albums of the 21st century and winning her six Grammy Awards in a single night.

Continued Success with "25" and Hiatus (2012-2020)
Her third album, 25 (2015), featured the record-shattering lead single "Hello." It continued her massive commercial success. During this period, she focused on her personal life, having a son and later finalizing her divorce. She also overcame vocal cord surgery, which forced her to relearn how to sing.

Triumphant Return with "30" and Residency (2021-Present)
Her divorce inspired her fourth album, 30 (2021), with the hit "Easy On Me." The album was a critical and commercial success, exploring themes of heartbreak, motherhood, and self-discovery. She launched a successful Las Vegas residency, "Weekends with Adele," cementing her status as a premier live performer.

`,
      topSongs: [
        'Hello',
        'Rolling in the Deep',
        'Someone Like You',
        'Set Fire to the Rain',
        'Easy On Me',
        'Skyfall',
        'When We Were Young',
        'Chasing Pavements',
        'Make You Feel My Love'
      ],
      birthDate: 'May 5, 1988.',
      nationality: 'England',
      popularity: 98,
      awards: [
        '16 Grammy Awards',
        '1 Academy Award (Oscar)',
        '13 Brit Awards'
      ],
      socialMedia: {
        youtube: 'https://www.youtube.com/user/XLRECORDS',
        instagram: 'https://www.instagram.com/adele/',
        facebook: 'https://facebook.com/adele'
      },
      similarArtists: [2, 3, 4]
    },
    {
      id: 3,
      name: 'Beyoncé',
      type: 'international',
      image: 'OIP (1).webp',
      genre: 'Pop, Hip-Hop',
      bio: 'Beyoncé Giselle Knowles-Carter ',
      lifeStory: `Early Life & Destiny's Child (1981-2002)
Beyoncé Giselle Knowles was born on September 4, 1981, in Houston, Texas. Her talent was evident early on, and she began competing in dance and singing competitions as a child. In the late 1990s, her girl group, Destiny's Child, originally formed as Girl's Tyme, rose to superstardom. Managed by her father, Mathew Knowles, they became one of the best-selling girl groups of all time with hits like "Say My Name," "Bills, Bills, Bills," and "Survivor," establishing Beyoncé as the standout star.

Launching a Solo Career (2003-2005)
While still in Destiny's Child, Beyoncé launched her solo career with the album Dangerously in Love in 2003. It was a massive critical and commercial success, spawning global number-one singles "Crazy in Love" (featuring Jay-Z) and "Baby Boy." This album solidified her as a force in the music industry independent of the group, earning her five Grammy Awards in a single night.

Global Superstardom & Acting (2006-2012)
She continued her success with her second album, B'Day, which included hits like "Irreplaceable." She also pursued acting, starring in films such as Dreamgirls, for which she earned Golden Globe nominations. In 2008, she married rapper and mogul Shawn "Jay-Z" Carter. Her alter ego "Sasha Fierce" was introduced with her third album, I Am... Sasha Fierce. She famously sang "At Last" at President Barack Obama's first inaugural ball in 2009.

Business Empire & Self-Titled Era (2013-2015)
Beyoncé took full control of her career, firing her father as manager and founding her own entertainment company, Parkwood Entertainment. In a landmark industry move, she surprise-released her self-titled visual album Beyoncé in 2013, revolutionizing how music is released. The album was critically praised for its personal and feminist themes. She and Jay-Z became music's first billionaire couple, and she solidified her status as a business mogul.

Lemonade & Cultural Icon (2016-2019)
She released her groundbreaking visual album Lemonade in 2016, a deeply personal project exploring themes of infidelity, healing, Black culture, and female empowerment. It is widely considered a masterpiece. In 2018, she made history as the first Black woman to headline the Coachella Valley Music and Arts Festival; her performance was immortalized in the concert film Homecoming. The same year, she and Jay-Z released their collaborative album, Everything Is Love, as The Carters.

The Renaissance Era & Beyond (2020-Present)
After releasing the visual album Black Is King in 2020, she embarked on her next musical act. In 2022, she released Renaissance, the first part of a three-act project, a dance-fueled album celebrating Black and queer pioneers of house and disco music. It spawned the global hit "Break My Soul." In 2024, she ventured into country music with the album Cowboy Carter, reclaiming the genre's Black roots and breaking numerous streaming records. With over 30 Grammy Awards, she holds the record for the most wins by any artist in history.`,
      topSongs: [
        'Crazy in Love',
        'Single Ladies',
        'Formation',
        'Halo',
        'Break My Soul"',
        'Irreplaceable',
        'Texas Hold Em',
        'Love on Top',
        'Drunk in Love'
      ],
      birthDate: 'September 4, 1981',
      nationality: 'American',
      popularity: 98,
      awards: [
        '32 Grammy Wins',
        'MTV Video Music Awards',
        'NAACP Image Awards'
      ],
      socialMedia: {
        youtube: 'https://youtube.com/beyonce',
        instagram: 'https://www.instagram.com/beyonce/',
        facebook: 'https://facebook.com/beyonce'
      },
      similarArtists: [2, 3, 4]
    },

    {
      id: 4,
      name: 'Taylor Swift ',
      type: 'international',
      image: 'OIP (3).webp',
      genre: 'Pop, Electropop ',
      bio: 'American singer-songwriter',
      lifeStory: `Early Life & Country Beginnings (1989-2005)
Taylor Alison Swift was born on December 13, 1989, in Reading, Pennsylvania. She developed a passion for country music and began performing at local events as a child. At age 14, she moved with her family to Nashville, Tennessee, to pursue a career in music. She signed a songwriting deal with Sony/ATV Music Publishing, becoming the youngest staff songwriter in the company's history.

Breakthrough with Country (2006-2008)
She signed with Big Machine Records and released her self-titled debut album, Taylor Swift, in 2006. The album was a slow-burn success on country radio, with hits like "Tim McGraw" and "Teardrops on My Guitar," establishing her as a promising new voice who wrote her own songs about teenage life.

Crossover Superstardom (2008-2011)
Her second album, Fearless (2008), catapulted her to international fame. Blending country with pop, it spawned massive hits like "Love Story" and "You Belong with Me." Fearless won the Grammy Award for Album of the Year, making her, at age 20, the youngest artist to win the honor at the time. Her third album, Speak Now (2010), was written entirely by herself and continued her massive success.

Full Pop Transition & "1989" Era (2012-2016)
The album Red (2012) showcased her move toward pure pop, with the song "We Are Never Ever Getting Back Together" earning her her first No. 1 on the Billboard Hot 100. She fully shed her country roots with the synth-pop album *1989* (2014), declaring the genre move official. It generated era-defining hits like "Shake It Off" and "Blank Space" and earned her a second Grammy for Album of the Year.

Public Scrutiny & "Reputation" (2016-2018)
After a highly publicized feud with Kanye West and Kim Kardashian, which led to intense media backlash, she largely disappeared from the public eye. She returned in 2017 with the album Reputation, a darker, electropop record that addressed the media circus and her newfound reclusiveness. The subsequent "Reputation Stadium Tour" became the highest-grossing US tour in history at that time.

Artistic Freedom & "Lover" (2019)
After her contract with Big Machine ended, she signed with Republic Records, gaining ownership of her future master recordings. She released the upbeat, colorful pop album Lover in 2019.

The "Master's Heist" & Re-recordings (2019-Present)
In a major point of conflict, her former label, Big Machine, sold the master recordings of her first six albums to music manager Scooter Braun, who later sold them again. Unable to purchase her own masters, Swift announced she would re-record her first six albums to create versions she fully owned. These "Taylor's Version" releases have been massively successful, both commercially and as a statement on artists' rights.

Indie-Folk Turn & "The Eras Tour" (2020-Present)
During the COVID-19 pandemic, she surprise-released two indie-folk albums, Folklore and Evermore, which were critically acclaimed for their storytelling; Folklore earned her a third Album of the Year Grammy. In 2023, she embarked on "The Eras Tour," a colossal stadium tour celebrating her entire discography, which became a cultural and economic phenomenon, breaking numerous records for attendance and revenue. Her ongoing success and influence have solidified her status as a defining artist of her generation.

`,
      topSongs: [
        'Shake It Off',
        'Anti-Hero',
        'Blank Space',
        'Love Story',
        'Cruel Summer',
        'You Belong With Me',
        'Cardigan',
        'We Are Never Ever Getting Back Together',
        'All Too Well'
      ],
      birthDate: 'December 13, 1989',
      nationality: 'United States',
      popularity: 98,
      awards: [
        '40 American Music Awards',
        '29 Billboard Music Awards',
        '1 Emmy Award'
      ],
      socialMedia: {
        youtube: 'https://youtube.com/Taylor Swift',
        instagram: 'https://instagram.com/Taylor Swift',
        facebook: 'https://facebook.com/Taylor Swift'
      },
      similarArtists: [2, 3, 4]
    },
    {
  id: 4,
  name: 'Rihanna',
  type: 'international',
  image: 'OIP (4).webp',
  genre: 'Pop',
  bio: ' Barbadian singer',
  lifeStory: `Early Life in Barbados (1988-2004)
Robyn Rihanna Fenty was born on February 20, 1988, in Saint Michael, Barbados. She had a challenging childhood, with her parents divorcing when she was 14. She formed a girl group with two classmates and developed an interest in singing, often performing for friends. In 2003, she was discovered by American record producer Evan Rogers, who was vacationing in Barbados. He was so impressed he invited her to New York to record demo tapes.

Instant Stardom & Pop Domination (2005-2009)
At age 16, she auditioned for Def Jam Recordings and its new CEO, Jay-Z, who signed her immediately. Her debut single, "Pon de Replay" (2005), became an international hit. Her career was catapulted to global superstardom with her third album, Good Girl Gone Bad (2007). The lead single, "Umbrella" featuring Jay-Z, became a cultural phenomenon, dominating charts worldwide and earning her first Grammy. This era marked her transformation from a Caribbean pop singer to a global trendsetter.

Artistic Exploration & Icon Status (2010-2016)
She continued her chart dominance with a relentless release schedule, dropping albums like Loud (with hits like "Only Girl (In the World)" and "We Found Love") and Unapologetic, which won a Grammy for Best Urban Contemporary Album. During this period, she became known for her bold fashion choices, powerful vocals, and genre-hopping hits, spanning dance-pop, R&B, and EDM. Her collaboration with EDM producer Calvin Harris, "We Found Love," became one of the best-selling digital singles of all time.

The 'Anti' Era & Music Hiatus (2016-Present)
She released her critically acclaimed eighth studio album, Anti, in 2016. It was a deliberate departure from her pop hits, showcasing a more experimental, psychedelic R&B sound. It spawned the mega-hit "Work" (featuring Drake) and became her first album to be certified Platinum by the RIAA on the day of its release. Since Anti, she has released only a few one-off singles, effectively going on hiatus from releasing full albums.

Fenty Business Empire & Motherhood (2017-Present)
Rihanna shifted her focus from music to business, launching a revolutionary empire. In 2017, she co-founded Fenty Beauty with LVMH, celebrated for its unprecedented 40-shade foundation range, championing inclusivity in the beauty industry. In 2018, she launched the lingerie line Savage X Fenty, known for its body-positive and diverse runway shows. These ventures made her a billionaire and the wealthiest female musician in the world. In 2022, she welcomed her first son with partner A$AP Rocky and performed a celebrated halftime show at the Super Bowl LVII, reminding the world of her iconic musical status.

Her story is one of constant evolution: from a teenage pop sensation to a revered artist and, finally, to a groundbreaking business mogul and cultural force.

`,
  topSongs: ['Umbrella', 'We Found Love','Diamonds', 'Work', 'Love the Way You Lie', 'Disturbia', 'Only Girl ', 'Dont Stop the Music', 'Stay'],
  birthDate: 'February 20, 1988',
  nationality: 'Barbadian',
  popularity: 90,
  awards: ['9 Grammy Wins', '13 American Music Awards', '12 Billboard Music Awards'],
  socialMedia: {
 youtube: 'https://youtube.com/Rihanna',
        instagram: 'https://instagram.com/Rihanna',
        facebook: 'https://facebook.com/Rihanna'
  },
  similarArtists: [2, 3, 4]
},
{ id: 5,
  name: 'Shakira',
  type: 'international',
  image: 'OIP (5).webp',
  genre: 'Rock, Pop',
  bio: 'singer-songwriter from Colombia',
  lifeStory: `Early Life & Local Success in Colombia (1977-1995)
Shakira Isabel Mebarak Ripoll was born on February 2, 1977, in Barranquilla, Colombia. Of Lebanese descent on her father's side, she was deeply influenced by both Arabic music and Latin rock. She began writing poetry and songs as a child. She signed her first record deal with Sony Music Colombia at age 13. Her first two albums, Magia and Peligro, were commercially unsuccessful, leading her to take a break from recording to finish high school.

Breakthrough in the Latin World (1996-1999)
Her third album, Pies Descalzos (1995), was a major breakthrough across Latin America, selling over 5 million copies with hits like "Estoy Aquí." She solidified her stardom with her fourth album, ¿Dónde Están los Ladrones? (1998). A critical and commercial masterpiece, it fused rock, pop, and Latin sounds and produced timeless hits like "Ciega, Sordomuda" and "Ojos Así," establishing her signature sound.

Global Crossover Superstardom (2001-2006)
Determined to break into the English market, she released Laundry Service in 2001. Its lead single, "Whenever, Wherever" ("Suerte" in Spanish), became a global phenomenon, introducing her unique voice and belly dancing to the world. The album sold over 13 million copies, making her an international pop star.

Consolidating a Global Empire (2006-2009)
She returned with the ambitious dual album project Fijación Oral, Vol. 1 (a Spanish pop/rock album) and Oral Fixation, Vol. 2 (an English pop/rock album). The Spanish album earned her a Grammy, while the English album spawned the global mega-hit "Hips Don't Lie," which became one of the best-selling singles of the 21st century.

Pop Dominance & "Waka Waka" (2010-2014)
Her album Sale el Sol (2010) marked a return to her rock and Latin roots. The same year, she was chosen to perform the official 2010 FIFA World Cup anthem, "Waka Waka (This Time for Africa)." The song became an international anthem of unity and is one of the best-selling World Cup songs of all time.

The Voice, New Music & Personal Life (2014-Present)
She served as a coach on the American TV show The Voice for several seasons, broadening her U.S. audience. In 2023, after a seven-year music hiatus, she made a massive comeback with two powerful diss tracks, "BZRP Music Sessions, Vol. 53" and "TQG" with Karol G, which broke multiple YouTube and streaming records. She has two children with Spanish soccer player Gerard Piqué, from whom she separated in 2022. Her story is one of relentless artistic evolution, from a local Colombian singer to a genre-blending global icon.

`,
  topSongs: ['Hips Dont Lie', 'Whenever Wherever','Waka Waka', 'Underneath Your Clothes', 'La Tortura', 'She Wolf', 'Chantaje', 'Loca', 'Ciega Sordomuda'],
  birthDate: 'February 2, 1977',
  nationality: 'colombian',
  popularity: 90,
  awards: ['3 Grammy Wins', '12 Latin Grammy Awards', '4 American Music Awards'],
  socialMedia: {
 youtube: 'https://youtube.com/Shakira',
        instagram: 'https://instagram.com/Shakira',
        facebook: 'https://facebook.com/Shakira'
  },
  similarArtists: [2, 3, 4]
},
{
   id: 6,
  name: 'Justin Bieber',
  type: 'international',
  image: 'OIP (6).webp',
  genre: 'Pop, R&B',
  bio: 'Canadian singer-songwriter',
  lifeStory: `Early Life & Discovery (1994-2008)
Justin Drew Bieber was born on March 1, 1994, in London, Ontario, Canada. Raised by his single mother, he showed an early interest in music, learning to play several instruments. In 2007, at age 13, he began posting videos of his performances on YouTube. His talent caught the attention of talent manager Scooter Braun, who introduced him to Usher. This led to a record deal with RBMG Records.`,
  topSongs: ['Sorry', 'Baby','Peaches', 'Love Yourself', 'What Do You Mean?', 'Yummy', 'Intentions', 'Holy', 'Ghost'],
  birthDate: 'March 1, 1994',
  nationality: 'Canadian',
  popularity: 90,
  awards: ['2 Grammy Wins', '20 Billboard Music Awards', '18 American Music Awards'],
  socialMedia: {
 youtube: 'https://youtube.com/Justin Bieber',
        instagram: 'https://instagram.com/Justin Bieber',
        facebook: 'https://facebook.com/Justin Bieber'
  },
  similarArtists: [2, 3, 4]
},
{
    id: 7,
    name: 'Ed Sheeran',
    type: 'international',
    image: 'OIP (7).webp',
    genre: 'Pop, Folk',
    bio: 'English singer-songwriter',
    lifeStory: `Early Life & The Independent Grind (1991-2010)
Edward Christopher Sheeran was born on February 17, 1991, in Halifax, England, and raised in Framlingham, Suffolk. Drawn to music from a young age, he began singing in a church choir and learning guitar. At 16, he moved to London to pursue music, playing countless small gigs and open mic nights. He self-released his first EP, The Orange Room, and began building a fervent online following by constantly performing and leveraging early social media and platforms like YouTube.

Breakthrough with '+' (2011-2012)
After tirelessly touring and gaining a reputation, he caught the attention of Jamie Foxx, who gave him free studio time in Los Angeles, and eventually signed with Asylum/Atlantic Records. His major-label debut album, + (pronounced "Plus"), was released in 2011. Driven by the heartfelt singles "The A Team" and "Lego House," it was a critical and commercial smash, topping the UK charts and establishing him as a new voice in acoustic pop.

Global Superstardom with 'x' and '÷' (2013-2017)
His second album, x (pronounced "Multiply"), in 2014, catapulted him to global fame. It showcased a more diverse sound, blending hip-hop beats with his singer-songwriter roots. The massive global hit "Thinking Out Loud" earned him two Grammys, including Song of the Year. He followed this with his third album, ÷ (pronounced "Divide"), in 2017. It was a cultural phenomenon, spawning multiple global number-one singles like the record-breaking "Shape of You," the folk-pop "Castle on the Hill," and the romantic "Perfect." The Divide Tour became the highest-grossing tour of all time upon its completion.

Personal Challenges, Hiatus, and Return (2018-Present)
After the immense success of the Divide Tour, he took a hiatus from social media and music in 2019 to focus on his personal life with his wife, Cherry Seaborn, whom he married in 2019. He returned in 2021 with his fourth album, = (pronounced "Equals"), which explored themes of love, fatherhood, and loss. In 2023, he released his fifth album, - (pronounced "Subtract"), a deeply personal and raw record produced with Aaron Dessner of The National, which was written during a period of profound personal crisis and grief.

Despite his global fame, he is known for his down-to-earth persona, relentless work ethic, and a career built on the foundation of his solo loop-pedal live performances.

`,
    topSongs: ['Shape of You', 'Perfect','Thinking Out Loud', 'Bad Habits', 'Photograph', 'Castle on the Hill', 'The A Team',
    'Galway', 'Lego House'],
    birthDate: 'February 17, 1991',
    nationality: 'English',
    popularity: 90,
    awards: ['4 Grammy Wins', '6 Brit Awards', '1 Golden Globe Award'],
    socialMedia: {
      youtube: 'https://youtube.com/Ed Sheeran',
      facebook: 'https://facebook.com/Ed Sheeran',
      instagram: 'https://instagram.com/Ed Sheeran'
    },
    similarArtists: [2, 3, 4]
},
{
    id: 8,
    name: 'Drake',
    type: 'international',
    image: 'OIP (8).webp',
    genre: 'Hip-Hop, R&B',
    bio: 'Canadian rapper, singer, and actor',
    lifeStory: `Early Life & Acting Beginnings (1986-2006)
Aubrey Drake Graham was born on October 24, 1986, in Toronto, Canada. Raised by his mother after his parents' divorce, he developed an early interest in music and acting. He gained initial fame as an actor on the teen drama series Degrassi: The Next Generation, playing the character Jimmy Brooks from 2001 to 2009.
Breakthrough in Music & Mixtape Success (2006-2010)
In 2006, Drake released his debut mixtape, Room for Improvement, followed by Comeback Season in 2007. However, it was his third mixtape, So Far Gone (2009), that catapulted him to stardom. The mixtape featured the hit single "Best I Ever Had," which peaked at No. 2 on the Billboard Hot 100 and earned him a Grammy nomination. This success led to a record deal with Lil Wayne's Young Money Entertainment.
Global Domination with 'Thank Me Later' & 'Take Care' (2010-2013)
Drake's debut studio album, Thank Me Later (2010), debuted at No. 1 on the Billboard 200, solidifying his status as a major player in hip-hop. His sophomore album, Take Care (2011), showcased a more introspective and emotional side, blending rap with R&B. It won the Grammy Award for Best Rap Album and included hits like "Headlines" and "The Motto," which popularized the phrase "YOLO."
His third album, Nothing Was the Same (2013), continued his commercial success with singles like "Started from the Bottom" and "Hold On, We're Going Home."
Continued Success & Cultural Impact (2014-Present)
Drake's fourth album, If You're Reading This It's Too Late (2015), was released unexpectedly and debuted at No. 1. He followed this with Views (2016), which included the global hit "One Dance," becoming his first No. 1 single on the Billboard Hot 100. In 2018, he released Scorpion, a double album that broke several streaming records and featured hits like "God's Plan" and "In My Feelings."
Drake has continued to dominate the music industry with subsequent releases, collaborations, and his OVO Sound label. Known for his versatility, emotional vulnerability, and catchy hooks, he has become one of the best-selling music artists of all time, with numerous chart-topping hits and accolades to his name.
}`,
    topSongs: ['Gods Plan', 'Hotline Bling','In My Feelings', 'One Dance', 'Started from the Bottom', 'Laugh Now Cry Later', 'Take Care', 'Best I Ever Had', 'Hold On, We’re Going Home'],
    birthDate: 'October 24, 1986',
    nationality: 'Canadian',
    popularity: 90,
    awards: ['4 Grammy Wins', '27 Billboard Music Awards', '2 Brit Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Drake',
      facebook: 'https://facebook.com/Drake',
      instagram: 'https://instagram.com/Drake'
    },
    similarArtists: [2, 3, 4]
},
{
    id: 9,
    name: 'The Weeknd',
    type: 'international',
    image: 'OIP (9).webp',
    genre: 'R&B, Pop',
    bio: 'Canadian singer, songwriter, and record producer',
    lifeStory: `Early Life & Mysterious Beginnings (1990-2010)
Abel Makkonen Tesfaye, known professionally as The Weeknd, was born on February 16, 1990, in Toronto, Canada. Raised by his mother after his parents' separation, he dropped out of high school at 17 and began uploading music anonymously to YouTube in 2010. His early mixtapes—House of Balloons, Thursday, and Echoes of Silence—gained critical acclaim for their dark, atmospheric sound and introspective lyrics. Breakthrough & Mainstream Success (2011-2015)
The Weeknd's unique blend of R&B, pop, and electronic music quickly garnered attention. In 2011, he signed with Republic Records and released his compilation album, Trilogy, which included remastered versions of his mixtapes. His debut studio album, Kiss Land (2013), showcased his cinematic style but received mixed reviews. However, it was his second album, Beauty Behind the Madness (2015), that catapulted him to global superstardom. Featuring hits like "Can't Feel My Face" and "The Hills," the album won him two Grammy Awards and solidified his place in mainstream music.
Continued Evolution & Cultural Impact (2016-Present)
The Weeknd continued to evolve his sound with his third album, Starboy (2016), which featured collaborations with Daft Punk and further explored themes of fame and excess. The title track won a Grammy for Best Urban Contemporary Album. In 2020, he released After Hours, which included the record-breaking single "Blinding Lights." The song became one of the longest-charting hits in Billboard Hot 100 history and earned him multiple awards. Known for his distinctive voice, genre-blending music, and enigmatic persona, The Weeknd has become one of the most influential artists of his generation, with numerous accolades and a significant cultural impact.
`,
    topSongs: ['Blinding Lights', 'Starboy','The Hills', 'Can’t Feel My Face', 'Save Your Tears', 'I Feel It Coming', 'Earned It', 'Call Out My Name', 'Die For You'],
    birthDate: 'February 16, 1990',
    nationality: 'Canadian',
    popularity: 90,
    awards: ['3 Grammy Wins', '20 Billboard Music Awards', '1 American Music Award'],
    socialMedia: {
      youtube: 'https://youtube.com/The Weeknd',
      facebook: 'https://facebook.com/The Weeknd',
      instagram: 'https://instagram.com/The Weeknd'
    },
    similarArtists: [2, 3, 4]
},
{    id: 10,
    name: 'Ariana Grande',
    type: 'international',
    image: 'OIP (10).webp',
    genre: 'Pop, R&B',
    bio: 'American singer and actress',
    lifeStory: `Early Life & Acting Career (1993-2010)
Ariana Grande-Butera was born on June 26, 1993, in Boca Raton, Florida. She began her career in the entertainment industry at a young age, starring in local theater productions before landing a role on the Nickelodeon TV show Victorious in 2010. Her portrayal of Cat Valentine showcased her vocal talents and comedic timing, earning her a dedicated fanbase.
Breakthrough in Music & Pop Stardom (2011-2015)
In 2011, Grande signed with Republic Records and released her debut album, Yours Truly, in 2013. The album debuted at No. 1 on the Billboard 200 and featured the hit single "The Way," which showcased her impressive vocal range and drew comparisons to Mariah Carey. Her sophomore album, My Everything (2014), solidified her status as a pop superstar, with chart-topping singles like "Problem," "Break Free," and "Bang Bang." The album received critical acclaim and earned her several award nominations.
Continued Success & Evolution (2016-Present)
Grande continued to dominate the pop music scene with her third album, Dangerous`,
  topSongs: ['Thank U, Next', '7 Rings','No Tears Left to Cry'],
    birthDate: 'June 26, 1993',
      nationality: 'American',
      popularity: 90,
      awards: ['2 Grammy Wins', '3 American Music Awards', '5 MTV Video Music Awards'],
      socialMedia: {
        youtube: 'https://youtube.com/Ariana Grande',
        facebook: 'https://facebook.com/Ariana Grande',
        instagram: 'https://instagram.com/Ariana Grande'
      },
      similarArtists: [2, 3, 4]
},
{
    id: 11,
    name: 'Bruno Mars',
    type: 'international',
    image: 'OIP (11).webp',
    genre: 'Pop, Funk',
    bio: 'American singer-songwriter and record producer',
    lifeStory: `Early Life & Musical Beginnings (1985-2003)
Peter Gene Hernandez, known professionally as Bruno Mars, was born on October 8, 1985, in Honolulu, Hawaii. Raised in a musical family, he was exposed to various genres from a young age, performing in his family's band as a child. His early influences included Elvis Presley, Michael Jackson, and Prince. After graduating high school, he moved to Los Angeles to pursue a music career.
Breakthrough & Solo Success (2004-2012)
Bruno Mars initially found success as a songwriter and producer for other artists, co-writing hits like "Nothin' on You" by B.o.B and "Billionaire" by Travie McCoy. In 2010, he released his debut album, Doo-Wops & Hooligans, which featured chart-topping singles like "Just the Way You Are" and "Grenade." The album's success established him as a solo artist with a unique blend of pop, R&B, and funk influences.
Continued Dominance & Evolution (2013-Present)
Mars continued to build on his success with his second album, Unorthodox Jukebox (2012), which included hits like "Locked Out of Heaven" and "When
I Was Your Man." In 2016, he released his third album, 24K Magic, which showcased a retro-funk sound and earned him multiple Grammy Awards, including Album of the Year. Known for his dynamic performances and throwback style, Bruno Mars has become one of the best-selling music artists of all time, with numerous accolades and a significant impact on contemporary pop music.
`,
    topSongs: ['Uptown Funk', 'Just the Way You Are','24K Magic', 'Grenade', 'Locked Out of Heaven', 'That’s What I Like', 'When I Was Your Man', 'Finesse', 'Treasure'],
    birthDate: 'October 8, 1985',
    nationality: 'American',
    popularity: 90,
    awards: ['11 Grammy Wins', '3 American Music Awards', '5 Billboard Music Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Bruno Mars',
      facebook: 'https://facebook.com/Bruno Mars',
      instagram: 'https://instagram.com/Bruno Mars'
    },
    similarArtists: [2, 3, 4]
},
{
    id: 12,
    name: 'Billie Eilish',
    type: 'international',
    image: 'OIP (12).webp',
    genre: 'Pop, Electropop',
    bio: 'American singer-songwriter',
    lifeStory: `Early Life & Musical Beginnings (2001-2015)
Billie Eilish Pirate Baird O\'Connell was born on December 18, 2001, in Los Angeles, California. Raised in a family of actors and musicians, she began writing and recording music at a young age with her brother Finneas O\'Connell. The siblings collaborated on songs in their home studio, honing their unique sound that blended pop, electropop, and alternative influences.
Breakthrough & Global Stardom (2016-Present)
In 2016, Eilish gained attention with her debut single "Ocean Eyes," which went viral on SoundCloud and led to a record deal with Interscope Records. Her debut EP, Don\'t Smile at Me (2017), showcased her dark, moody style and earned critical acclaim. In 2019, she released her debut studio album, When We All Fall Asleep, Where Do We Go?, which debuted at No. 1 on the Billboard 200. The album featured hits like "Bad Guy" and earned her multiple Grammy Awards, including Album of the Year, making her the youngest artist to win in that category.
Eilish has continued to push boundaries with her music and visual style, becoming a cultural icon for her generation. Known for her introspective lyrics, genre-blending sound, and distinctive fashion sense, she has solidified her place as one of the most influential artists in contemporary music.
`,
    topSongs: ['Bad Guy', 'When the Party’s Over','Everything I Wanted', 'Therefore I Am', 'Ocean Eyes', 'Lovely', 'Bury a Friend', 'Happier Than Ever', 'My Future'],
    birthDate: 'December 18, 2001',
    nationality: 'American',
    popularity: 90,
    awards: ['7 Grammy Wins', '3 American Music Awards', '1 Golden Globe Award'],
    socialMedia: {
      youtube: 'https://youtube.com/Billie Eilish',
      facebook: 'https://facebook.com/Billie Eilish',
      instagram: 'https://instagram.com/Billie Eilish'
    },
    similarArtists: [2, 3, 4]
},
{
    id: 13,
    name: 'Katy Perry',
    type: 'international',
    image: 'OIP (13).webp',
    genre: 'Pop',
    bio: 'American singer-songwriter',
    lifeStory: `Early Life & Gospel Beginnings (1984-2003)
Katheryn Elizabeth Hudson, known professionally as Katy Perry, was born on October 25, 1984, in Santa Barbara, California. Raised in a strict evangelical Christian household, she began singing in church and released a gospel album at age 15 under her birth name. However, she soon realized that her musical aspirations extended beyond gospel music.
Breakthrough & Pop Stardom (2004-2010)
In 2004, Perry signed with Columbia Records and released her debut album, Katy Hudson, which was a commercial failure. She later adopted the stage name Katy Perry and shifted her musical style to pop. Her breakthrough came with the release of her second album
    `,
    topSongs: ['Firework', 'Roar','Dark Horse', 'California Gurls', 'Teenage Dream', 'I Kissed a Girl', 'Last Friday Night', 'E.T.', 'Wide Awake'],
    birthDate: 'October 25, 1984',
    nationality: 'American',
    popularity: 90,
    awards: ['5 American Music Awards', '14 Billboard Music Awards', '1 Brit Award'],
    socialMedia: {
      youtube: 'https://youtube.com/Katy Perry',
      facebook: 'https://facebook.com/Katy Perry',
      instagram: 'https://instagram.com/Katy Perry'
    },
    similarArtists: [2, 3, 4]

},
{
    id: 14,
    name: 'Lady Gaga',
    type: 'international',
    image: 'OIP (14).webp',
    genre: 'Pop, Dance',
    bio: 'American singer, songwriter, and actress',
    lifeStory: `Early Life & Musical Foundations (1986-2007)
Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, was born on March 28, 1986, in New York City. Raised in a Catholic household, she began playing piano at age four and attended the Convent of the Sacred Heart, a private all
-girls school. She later studied at New York University\'s Tisch School of the Arts before dropping out to pursue a music career.
Breakthrough & Pop Icon Status (2008-Present)
In 2008, Gaga signed with Interscope Records and released her debut album, The Fame, in 2008. The album was a commercial success, propelled by hit singles like "Just Dance" and "Poker Face," which showcased her unique blend of pop, dance, and electronic music. Her theatrical performances and avant-garde fashion quickly made her a cultural phenomenon.
    `,
    topSongs: ['Bad Romance', 'Shallow','Poker Face', 'Just Dance', 'Born This Way', 'Telephone', 'Alejandro', 'Million Reasons', 'Rain on Me'],
    birthDate: 'March 28, 1986',
    nationality: 'American',
    popularity: 90,
    awards: ['12 Grammy Wins', '1 Academy Award', '3 Golden Globe Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Lady Gaga',
      facebook: 'https://facebook.com/Lady Gaga',
      instagram: 'https://instagram.com/Lady Gaga'
    },
    similarArtists: [2, 3, 4]
},
{
    id: 15,
    name: 'Khaled',
    type: 'arabic',
    image: 'OIP (15).webp',
    genre: 'Raï',
    bio: 'Algerian singer-songwriter',
    lifeStory: `Early Life & Musical Beginnings (1960-1980)
Khaled Hadj Brahim, known simply as Khaled, was born on February 29, 1960, in Oran, Algeria. Growing up in a musical family, he was exposed to traditional Algerian music from a young age. He began singing in local clubs and quickly gained recognition for his powerful voice and unique style that blended traditional Raï music with modern influences.
Breakthrough & International Success (1980-Present)
Khaled's breakthrough came in the 1980s with hits like "Didi" and "Aïcha," which brought Raï music to a global audience. His 1992 album, Khaled, featured the international hit "Didi," which topped charts in several countries and established him as a leading figure in world music. Over the years, he has continued to release successful albums and singles, collaborating with artists from various genres and further popularizing Raï music worldwide.
`,
    topSongs: ['Didi', 'Aicha','C’est la vie', 'Abdel Kader', 'El Harba Wine', 'Wahrane Wahrane', 'Bakhta', 'N’sel Fik', 'Chebba'],
    birthDate: 'February 29, 1960',
    nationality: 'Algerian',
    popularity: 85,
    awards: ['World Music Award', 'BBC Radio 3 Award for World Music'],
    socialMedia: {
      youtube: 'https://youtube.com/Khaled',
      facebook: 'https://facebook.com/Khaled',
      instagram: 'https://instagram.com/Khaled'
    },
    similarArtists: [1, 3, 4]
},
{
    id: 16,
    name: 'Wadih al Safi',
    type: 'arabic',
    image: 'OIP (16).webp',
    genre: 'Lebanese Traditional',
    bio: 'Lebanese singer and composer',
    lifeStory: `Early Life & Musical Foundations (1921-1940s)
Wadih al Safi was born on November 1, 1921, in the village of Zahle, Lebanon. From a young age, he showed a deep passion for music and began singing traditional Lebanese folk songs. His powerful voice and emotive delivery quickly gained him recognition in his local community.
Breakthrough & Cultural Icon Status (1950s-Present)
Wadih al Safi's breakthrough came in the 1950s when he began recording and performing widely. He became known as "The Voice of Lebanon" for his ability to capture the essence of Lebanese culture through his music. Over his long career, he released numerous albums and composed many songs that have become classics in Lebanese music. His contributions to Arabic music have earned him a revered status, and he is celebrated for preserving and promoting Lebanese musical heritage worldwide.
`,
    topSongs: ['Lamma Bada Yatathanna', 'Ya Tayr','Zahrat al-Madaen', 'Al Quds Tunadeena', 'Ana Albi Dalili', 'Habaytak Bisayf', 'Nassam Alayna el Hawa', 'Ya Jarat al Wadi', 'Rjaana'],
    birthDate: 'November 1, 1921',
    nationality: 'Lebanese',
    popularity: 80,
    awards: ['Lebanese National Order of Merit', 'Cultural Medal of Honor'],
    socialMedia: {
      youtube: 'https://youtube.com/Wadih al Safi',
      facebook: 'https://facebook.com/Wadih al Safi',
      instagram: 'https://instagram.com/Wadih al Safi'
    },
    similarArtists: [1, 2, 4]

},
{
    id: 17,
    name: 'Nancy Ajram',
    type: 'arabic',
    image: 'OIP (17).webp',
    genre: 'Arabic Pop',
    bio: 'Lebanese singer and businesswoman',
    lifeStory: `Early Life & Musical Beginnings (1983-1997)
Nancy Ajram was born on May 16, 1983, in Beirut, Lebanon. From a young age, she displayed a passion for music and began singing in local competitions. At the age of 12, she released her first album, "Mihtagalak," which showcased her talent and marked the beginning of her musical career.
Breakthrough & Pop Icon Status (1998-Present)
Nancy Ajram's breakthrough came with her 2003 album "Ya Salam," which featured the hit single "Akhasmak Ah." The album's success established her as a leading figure in Arabic pop music. Over the years, she has released numerous successful albums and singles, earning her widespread acclaim and a massive fanbase across the Arab world. Known for her catchy tunes, charismatic stage presence, and philanthropic efforts, Nancy Ajram has become one of the most influential and beloved artists in the region.
`,
    topSongs: ['Akhasmak Ah', 'Ya Tabtab','Ah W Noss', 'Enta Eih', 'Ma Tegi Hena', 'Ehsas Jdeed', 'Betfakkar Fi Eih', 'Hassa Beek', 'Lawn Ouyounak'],
    birthDate: 'May 16, 1983',
    nationality: 'Lebanese',
    popularity: 85,
    awards: ['World Music Award', 'Murex d\'Or Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Nancy Ajram',
      facebook: 'https://facebook.com/Nancy Ajram',
      instagram: 'https://instagram.com/Nancy Ajram'
    },
    similarArtists: [1, 2, 4]

},

{
    id: 18,
    name: 'Mohamed Mounir',
    type: 'arabic',
    image: 'OIP (18).webp',
    genre: 'Egyptian Pop, Folk',
    bio: 'Egyptian singer and actor',
    lifeStory: `Early Life & Musical Foundations (1954-1970s)
Mohamed Mounir was born on October 10, 1954, in Aswan, Egypt. From a young age, he showed a deep interest in music and began singing traditional Egyptian folk songs. His unique voice and ability to blend various musical styles quickly gained him recognition in his local community.
Breakthrough & Cultural Icon Status (1980s-Present)
Mohamed Mounir's breakthrough came in the 1980s when he began recording and performing widely. He became known for his ability to fuse traditional Egyptian music with contemporary styles, creating a unique sound that resonated with audiences across the Arab world. Over his long career, he has released numerous albums and composed many songs that have become classics in Egyptian music. His contributions to Arabic music have earned him a revered status, and he is celebrated for his artistic innovation and social activism.
`,
    topSongs: ['El Leila Ya Samra', 'Aghadan Alkak','Shababeek', 'Younis', 'Awel Marra', 'Hobak Nar', 'Tagroba', 'Ana Albi Dalili', 'Ezzay Ansak'],
    birthDate: 'October 10, 1954',
      nationality: 'Egyptian',
      popularity: 85,
      awards: ['Egyptian State Merit Award', 'Cultural Medal of Honor'],
      socialMedia: {
        youtube: 'https://youtube.com/Mohamed Mounir',
        facebook: 'https://facebook.com/Mohamed Mounir',
        instagram: 'https://instagram.com/Mohamed Mounir'
      },
      similarArtists: [1, 2, 3]
},

{
    id: 19,
    name: 'Elissa',
    type: 'arabic',
    image: 'OIP (19).webp',
    genre: 'Arabic Pop',
    bio: 'Lebanese singer',
    lifeStory: `Early Life & Musical Beginnings (1972-1998)
Elissa, born Elissar Zakaria Khoury on October 27, 1972, in Deir el Ahmar, Lebanon, showed an early interest in music. She participated in local singing competitions and eventually moved to Beirut to pursue a professional music career. In 1998, she released her debut album "Baddi Doub," which marked the beginning of her rise to fame.
Breakthrough & Pop Icon Status (1999-Present)
Elissa's breakthrough came with her 2000 album "W'akherta Ma'ak," which featured hit singles that resonated with audiences across the Arab world. Over the years, she has released numerous successful albums and singles, earning her widespread acclaim and a massive fanbase. Known for her emotive voice, romantic ballads, and philanthropic efforts, Elissa has become one of the most influential and beloved artists in the region.
`,
    topSongs: ['Ajmal Ihssas', 'Hob Kol Hayaty','Betmoun', 'Asaad Wahda', 'Law Taarafou', 'Aa Bali Habibi', 'Mawtini', 'Krahni', 'Saharna Ya Leil'],
    birthDate: 'October 27, 1972',
    nationality: 'Lebanese',
    popularity: 85,
    awards: ['World Music Award', 'Murex d\'Or Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Elissa',
      facebook: 'https://facebook.com/Elissa',
      instagram: 'https://instagram.com/Elissa'
    },
    similarArtists: [1, 2, 2]
},
{
    id: 20,
    name: 'Tamer Hosny',
    type: 'arabic',
    image: 'OIP (20).webp',
    genre: 'Egyptian Pop',
    bio: 'Egyptian singer, actor, and composer',
    lifeStory: `Early Life & Musical Beginnings (1977-2000)
Tamer Hosny was born on August 16, 1977, in Cairo, Egypt. From a young age, he showed a passion for music and began singing in local competitions. He studied engineering before fully committing to a career in music. In 2000, he released his debut album "Hob," which marked the beginning of his rise to fame.
Breakthrough & Pop Icon Status (2001-Present)
Tamer Hosny's breakthrough came with his 2002 album "Ya Bent El Eih," which featured hit singles that resonated with audiences across the Arab world. Over the years, he has released numerous successful albums and singles, earning him widespread acclaim and a massive fanbase. Known for his catchy tunes, charismatic stage presence, and philanthropic efforts, Tamer Hosny has become one of the most influential and beloved artists in the region.
`,
 topSongs: ['180 Daraga', 'Nour Einy','Omry Ebtada', 'Bahebak Enta', 'Eish Besho ak', 'Ya Ana Ya La', 'Leh La', 'Awel Marra', 'Elly Beny Benak'],
    birthDate: 'August 16, 1977',
    nationality: 'Egyptian',
    popularity: 85,
    awards: ['World Music Award', 'Murex d\'Or Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Tamer Hosny',
      facebook: 'https://facebook.com/Tamer Hosny',
      instagram: 'https://instagram.com/Tamer Hosny'
    },
    similarArtists: [1, 2, 3]
},
{
    id: 21,
    name: 'Wael Kfoury',
    type: 'arabic',
    image: 'OIP (21).webp',
    genre: 'Arabic Pop',
    bio: 'Lebanese singer and composer',
    lifeStory: `Early Life & Musical Beginnings (1974-1990s)
Wael Kfoury was born on September 14, 1974, in Zahlé, Lebanon. From a young age, he showed a passion for music and began singing in local competitions. In the early 1990s, he moved to Beirut to pursue a professional music career. His debut album "Ouyounak Amari" was released in 1996, marking the beginning of his rise to fame.
Breakthrough & Pop Icon Status (2000s-Present)
Wael Kfoury's breakthrough came with his 2001 album "Saharony El Leil," which featured hit singles that resonated with audiences across the Arab world. Over the years, he has released numerous successful albums and singles, earning him widespread acclaim and a massive fanbase. Known for his romantic ballads, powerful voice, and charismatic stage presence, Wael Kfoury has become one of the most influential and beloved artists in the region.
`,
    topSongs: ['Law Hobna Ghalta', 'Bahebak Aktar','Omri Ma Nensak', 'Aallamouni El Hawa', 'Kelmet Hob', 'El Hob Keda', 'Aghla Min El Demou', 'Mesh Baadak', 'Sa alouni'],
    birthDate: 'September 14, 1974',
    nationality: 'Lebanese',
    popularity: 85,
    awards: ['World Music Award', 'Murex d\'Or Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Wael Kfoury',
      facebook: 'https://facebook.com/Wael Kfoury',
      instagram: 'https://instagram.com/Wael Kfoury'
    },
    similarArtists: [1, 2, 3]
},
{
    id: 22,
    name: 'Kadim Al Sahir',
    type: 'arabic',
    image: 'OLP (22).jpg',
    genre: 'Arabic Classical',
    bio: 'Iraqi singer, composer, and poet',
    lifeStory: `Early Life & Musical Foundations (1957-1970s)
Kadim Al Sahir was born on September 12, 1957, in Mosul, Iraq. From a young age, he showed a deep interest in music and poetry, often composing songs and verses. He studied music at the Baghdad Conservatory, where he honed his skills in classical Arabic music.
Breakthrough & Cultural Icon Status (1980s-Present)
Kadim Al Sahir's breakthrough came in the 1980s when he began recording and performing widely. He became known for his ability to blend traditional Arabic music with contemporary styles, creating a unique sound that resonated with audiences across the Arab world. Over his long career, he has released numerous albums and composed many songs that have become classics in Arabic music. His contributions to Arabic music and poetry have earned him a revered status, and he is celebrated for his artistic innovation and cultural impact.
`,
    topSongs: ['Zidini Ishqan', 'Ana Wa Laila','Ha Habibi', 'Tathakkar', 'Qariat El Fingan', 'Albi Maak', 'Leilat Hob', 'Ya Jarat Al Wadi' ],
    birthDate: 'September 12, 1957',
    nationality: 'Iraqi',
    popularity: 90,
    awards: ['Arab Music Award', 'Murex d\'Or Awards'],
    socialMedia: {
      youtube: 'https://youtube.com/Kadim Al Sahir',
      facebook: 'https://facebook.com/Kadim Al Sahir',
      instagram: 'https://instagram.com/Kadim Al Sahir'
    },
    similarArtists: [1, 2, 3]


},
{
    id: 23,
    name: 'Fairuz',
    type: 'arabic',
    image: 'OIP (23).jpg',
    genre: 'Lebanese Traditional',
    bio: 'Lebanese singer and cultural icon',
    lifeStory: `Early Life & Musical Beginnings (1935-1950s)
Fairuz, born Nouhad Haddad on November 21, 1935, in Jabal al-Arz, Lebanon, showed an early interest in music. She began singing in school and local events before joining the Lebanese Radio Station in the 1950s. Her unique voice and emotive delivery quickly gained her recognition.
Breakthrough & Cultural Icon Status (1960s-Present)
Fairuz's breakthrough came in the 1960s when she began collaborating with the Rahbani Brothers, producing a series of successful albums and musicals. She became known as "The Soul of Lebanon" for her ability to capture the essence of Lebanese culture through her music. Over her long career, she has released numerous albums and performed worldwide, becoming a symbol of Lebanese identity and resilience. Her contributions to Arabic music have earned her a revered status, and she is celebrated for her artistic legacy and cultural impact.
`,
    topSongs: ['Kan Enna Tahoun', 'Nassam Alayna el Hawa ','Bayya El Khawatim','Zahrat al-Madaen', 'Al Bosta', 'Sa alouni El Nas', 'Habaytak Bisayf', 'Li Beirut', 'Aatini Al Nay'],
    birthDate: 'November 21, 1935',
    nationality: 'Lebanese',
    popularity: 95,
    awards: ['Lebanese National Order of Merit', 'Cultural Medal of Honor'],
    socialMedia: {
      youtube: 'https://youtube.com/Fairuz',
      facebook: 'https://facebook.com/Fairuz',
      instagram: 'https://instagram.com/Fairuz'
    },
    similarArtists: [1, 2, 3]
}
  ];

  constructor() { }

  // Get all artists
  getArtists(): Artist[] {
    return this.artists;
  }

  // Get artist by ID
  getArtistById(id: number): Artist | undefined {
    return this.artists.find(artist => artist.id === id);
  }

  // Get artists by type
  getArtistsByType(type: 'arabic' | 'international'): Artist[] {
    return this.artists.filter(artist => artist.type === type);
  }

  // Get featured artists (most popular)
  getFeaturedArtists(count: number = 4): Artist[] {
    return this.artists
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, count);
  }

  // Search artists by name, genre, or nationality
  searchArtists(query: string): Artist[] {
    const lowerQuery = query.toLowerCase();
    return this.artists.filter(artist =>
      artist.name.toLowerCase().includes(lowerQuery) ||
      artist.genre.toLowerCase().includes(lowerQuery) ||
      artist.nationality.toLowerCase().includes(lowerQuery) ||
      artist.bio.toLowerCase().includes(lowerQuery)
    );
  }

  // Get similar artists
  getSimilarArtists(artistId: number): Artist[] {
    const artist = this.getArtistById(artistId);
    if (!artist || !artist.similarArtists) return [];

    return artist.similarArtists
      .map(id => this.getArtistById(id))
      .filter((artist): artist is Artist => artist !== undefined)
      .slice(0, 4);
  }

  // Get artists by popularity
  getArtistsByPopularity(limit?: number): Artist[] {
    const sorted = this.artists.sort((a, b) => b.popularity - a.popularity);
    return limit ? sorted.slice(0, limit) : sorted;
  }

  // Get artists by nationality
  getArtistsByNationality(nationality: string): Artist[] {
    return this.artists.filter(artist =>
      artist.nationality.toLowerCase().includes(nationality.toLowerCase())
    );
  }

  // Get artists by genre
  getArtistsByGenre(genre: string): Artist[] {
    return this.artists.filter(artist =>
      artist.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // Get random artists
  getRandomArtists(count: number = 5): Artist[] {
    const shuffled = [...this.artists].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Get artists statistics
  getArtistsStats() {
    const arabicArtists = this.getArtistsByType('arabic');
    const internationalArtists = this.getArtistsByType('international');

    return {
      total: this.artists.length,
      arabic: arabicArtists.length,
      international: internationalArtists.length,
      averagePopularity: Math.round(
        this.artists.reduce((sum, artist) => sum + artist.popularity, 0) / this.artists.length
      ),
      mostPopular: this.getArtistsByPopularity(1)[0],
      genres: this.getUniqueGenres(),
      nationalities: this.getUniqueNationalities()
    };
  }

  // Get unique genres
  private getUniqueGenres(): string[] {
    const genres = new Set(this.artists.map(artist => artist.genre.split(',')[0].trim()));
    return Array.from(genres);
  }

  // Get unique nationalities
  private getUniqueNationalities(): string[] {
    const nationalities = new Set(this.artists.map(artist => artist.nationality));
    return Array.from(nationalities);
  }

  // Get artists by decade
  getArtistsByDecade(decade: string): Artist[] {
    const decadeStart = parseInt(decade);
    const decadeEnd = decadeStart + 9;

    return this.artists.filter(artist => {
      const birthYear = new Date(artist.birthDate).getFullYear();
      return birthYear >= decadeStart && birthYear <= decadeEnd;
    });
  }

  // Get artists with awards
  getArtistsWithAwards(): Artist[] {
    return this.artists.filter(artist => artist.awards && artist.awards.length > 0);
  }

  // Get latest artists (based on career start)
  getLatestArtists(limit: number = 5): Artist[] {
    return this.artists
      .sort((a, b) => new Date(b.birthDate).getTime() - new Date(a.birthDate).getTime())
      .slice(0, limit);
  }

  // Get artists by song count
  getArtistsBySongCount(limit?: number): Artist[] {
    const sorted = this.artists.sort((a, b) => b.topSongs.length - a.topSongs.length);
    return limit ? sorted.slice(0, limit) : sorted;
  }

  // Update artist popularity
  updateArtistPopularity(artistId: number, newPopularity: number): void {
    const artist = this.getArtistById(artistId);
    if (artist) {
      artist.popularity = Math.max(0, Math.min(100, newPopularity));
    }
  }

  // Add new artist (for future expansion)
  addArtist(artist: Omit<Artist, 'id'>): Artist {
    const newId = Math.max(...this.artists.map(a => a.id)) + 1;
    const newArtist: Artist = {
      id: newId,
      ...artist
    };
    this.artists.push(newArtist);
    return newArtist;
  }

  // Remove artist (for admin functionality)
  removeArtist(artistId: number): boolean {
    const index = this.artists.findIndex(artist => artist.id === artistId);
    if (index !== -1) {
      this.artists.splice(index, 1);
      return true;
    }
    return false;
  }

  // Get artists by multiple criteria
  getArtistsByCriteria(criteria: {
    type?: 'arabic' | 'international';
    genre?: string;
    nationality?: string;
    minPopularity?: number;
    maxPopularity?: number;
  }): Artist[] {
    return this.artists.filter(artist => {
      if (criteria.type && artist.type !== criteria.type) return false;
      if (criteria.genre && !artist.genre.toLowerCase().includes(criteria.genre.toLowerCase())) return false;
      if (criteria.nationality && !artist.nationality.toLowerCase().includes(criteria.nationality.toLowerCase())) return false;
      if (criteria.minPopularity && artist.popularity < criteria.minPopularity) return false;
      if (criteria.maxPopularity && artist.popularity > criteria.maxPopularity) return false;
      return true;
    });
  }
}
