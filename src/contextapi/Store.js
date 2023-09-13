import { createContext, useState } from "react"

export const Store = createContext();

const ContextApi = (props)=>{
    const[data,setData] = useState([
        // Bollywood
        
        {
            id:1,
            category:"Bollywood",
            name:"Gadar 2",
            image: "https://www.filmibeat.com/ph-big/2023/07/gadar-2_169047553820.jpg",
            text:"Gadar 2 (transl.Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma, and written by Shaktimaan Talwar. A sequel to Gadar: Ek Prem Katha, It starred Sunny Deol, Ameesha Patel and Utkarsh Sharma, who reprised their roles from the previous film.[5] In the film, Tara Singh returns to Pakistan in order to rescue his imprisoned son before the Indo-Pakistani War of 1971."
        },
        {
            id:2,
            category:"Bollywood",
            name:"Haddi",
            image: "https://assets.gadgets360cdn.com/pricee/assets/product/202308/haddi1_1691495050.jpg?downsize=215:301",
            text:"Haddi is a crime thriller movie or web series1234that stars Nawazuddin Siddiqui as a transgender rookie named Haddi134. Haddi joins a gang of transgenders in Delhi and becomes a ruthless criminal123. She is on a mission to exact revenge from those who destroyed her life2, but she also has dark secrets and a shady business that could expose her2. The movie or web series is directed by Akshat Ajay Sharma and produced by Zee Studios and Anandita Studios14."
        },
        {
            id: 3,
            category:"Bollywood",
            name:"Jawan",
            image:"https://th.bing.com/th/id/OIP.1MxEXHMUxqY2DmLx8ER2mwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Jawan (transl. Soldier) is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee as his first Hindi film.[4] It is produced by Gauri Khan and Gaurav Verma under Red Chillies Entertainment. The film stars Shah Rukh Khan in a dual role as father and son doppelgängers who team up to rectify corruption in society. Nayanthara, Vijay Sethupathi, Deepika Padukone (billed as a special appearance), Priyamani and Sanya Malhotra appear in supporting roles."
        },{
            id: 4,
            category:"Bollywood",
            name:"Friday Night Plan",
            image:"https://th.bing.com/th/id/OIP.5fXQoHdpgvbvDEiz0A2lEgHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Friday Night Plan is a teen comedy about two brothers who sneak out to a party while their mother is away123. The brothers are very different: one is a nerd and the other is a prankster4. They have to overcome their conflicts and work together to avoid getting caught and missing the fun123. The film stars Amrith Jayan, Babil Khan, and Juhi Chawla4."
        },
        {
            id: 5,
            category:"Bollywood",
            name:"Mirzapur ",
            image:"https://th.bing.com/th/id/OIP.oCkieg52CJ1iwFZrb0fQ2gHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"The first season of Mirzapur was released on 16 November 2018.[4] The series opened to positive response from audiences, while critics gave mixed reviews.[5] The performances of the cast members, particularly Pankaj Tripathi's, received rave response.[5] It eventually became the most popular web series in India, after Sacred Games.[6] The second season of Mirzapur was released on 23 October 2020.[7][8] The third season of the show will be expected in 2023 as its cast is on its way.[9][10][11]"
        },
        {
            id:6,
            category:"Bollywood",
            name:"Gangs of Wasseypur",
            image:"https://th.bing.com/th/id/OIP.fP7qAfXMJF-xgURqmnRXAgHaE7?w=281&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Gangs of Wasseypur is a 2012 Indian Hindi-language two-part gangster action crime film produced and directed by Anurag Kashyap,[3] and written by Kashyap and Zeishan Quadri. Centered on the coal mafia (Mafia Raj) of Dhanbad, and the underlying power struggles, politics and vengeance between three crime families, the film has an ensemble cast, with Manoj Bajpai, Nawazuddin Siddiqui, Pankaj Tripathi, Richa Chadda, Huma Qureshi and Tigmanshu Dhulia in the major roles. Its story spans 68 years from 1941 to 2009."
        },
        {
            id:7,
            category:"Bollywood",
            name:"Guns and Gulabs",
            image:"https://th.bing.com/th/id/OIP.C9arZ1za_SPQ-KuKJpkD7AHaEB?w=296&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"The story is set in Gulaabganj, a fictional town where government-licensed opium is grown. The vast majority of opium flow is controlled by two rival gangs, led by Ganchi and Nabeed. Gangaram, a local student, witnesses Babu Tiger, the right-hand man of Ganchi, being murdered by a hired killer named Four-Cut Aatmaram. Ganchi strikes a deal with Sukanto to deliver a large quantity of opium by the end of the month. Tipu, Babu's son, is a mechanic who is disgusted by Babu's criminal ways. He rejects Ganchi's offer to join his gang. Tipu wants to impress his crush Chandralekha, an English teacher at the school, by writing her a letter in English expressing his feelings. Since he cannot speak English, he hires Gangaram and his friends Nannu and Ikhlaq to write the letter. When Gangaram finds out that the letter is for Lekha, he sabotages it as he also has a crush on her."
        },
        {
            id:8,
            category:"Bollywood",
            name:"Sacred Games",
            image:"https://th.bing.com/th/id/OIP.AWbEVwtl06_Ma7iCN6n7fQHaEC?w=257&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Sacred Games began development after Netflix vice-president Erik Barmack asked Motwane in 2014 to create Indian content for the platform. They decided to adapt Chandra's novel in Hindi. After a script was completed, Motwane asked Kashyap to co-direct; Motwane directed the scenes with Singh, and Kashyap directed Gaitonde's scenes. Swapnil Sonawane was director of photography for Motwane; Sylvester Fonseca and Aseem Bajaj filmed the scenes directed by Kashyap. In the second season, Motwane reduced his involvement to showrunner and was replaced as director by Neeraj Ghaywan. Aarti Bajaj was the editor, and Alokananda Dasgupta composed the background score."
        },
        {
            id:9,
            category:"Bollywood",
            name:"Gurgaon",
            image:"https://th.bing.com/th/id/OIP.rLdhoGhAef1vjjAp_T_SBwHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Nikki Singh (Akshay Oberoi) is a boxer and the wayward son of real estate tycoon, Kehri Singh (Pankaj Tripathi). He is often sidelined in favour of his sister, Preet (Ragini Khanna), whom Kehri considers his lucky charm. Kehri shrewdly runs Preet Real Estate, successfully, in his daughter's name. Preet has just returned from France, after completing her course in architecture, and convinces her father to create a park, instead of a multi-billion real estate project on a land closer to a forest."
        },
        {
            id:10,
            category:"Bollywood",
            name:"Thackery",
            image:"https://th.bing.com/th/id/OIP.uxltnaUzkmIkJFM00vq2FQHaEl?w=279&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            text:"Thackeray received mixed reviews from critics.[12] Times of India gave the film 3 stars out of 5 and states: While the honesty is commendable, it comes across that the lead characters political motivations lack clarity. Perhaps a more seasoned writer, could have fleshed out Thackerays characters and eccentricities a lot better. But, its Nawaz nonchalant performance that overshadows the flaws and leaves a lasting impact."
        },

        // Technology
        {
            id:11,
            category:"Technology",
            name:"Blue Dart",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ckU2W.img?w=500&h=333&m=6",
            text:"Blue Dart Express Limited, a express air and integrated transportation and distribution logistics company, unveiled its newly revamped service, formerly known as Dart Plus, as Bharat Dart, the company announced through an exchange filing. This strategic transformation marks a momentous milestone in Blue Dart's ongoing journey, underscoring its unwavering commitment to serving the diverse needs of Bharat."
        },
        {
            id:12,
            category:"Technology",
            name:"Apple",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDV2y.img?w=534&h=300&m=6&x=685&y=71&s=47&d=47",
            text:"The new prices represent a reduction from their original launch prices, making them more accessible to users. Please note that these prices apply to the official Apple website/stores, and the selling prices on e-commerce platforms like Amazon and Flipkart may differ. If you've been considering a price drop for older iPhones, now is an opportune time to make a purchase."
        },
        {
            id:13,
            category:"Technology",
            name:"BlueSky",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDXPo.img?w=534&h=300&m=6",
            text:"he world of Social media is getting interesting day by day as the fortunes of many platforms keep changing. While Meta's Threads is facing a harsh active user decline, Bluesky seems to be doing the opposite. The social media platform Bluesky, created by Twitter Co-founder Jack Dorsey is performing really well as the latest statistics suggest. Bluesky has officially reached a significant milestone on September 13 and now boasts having one million users."
        },
        {
            id:14,
            category:"Technology",
            name:" MegaBook T1 laptop",
            image:"https://th.bing.com/th?id=ORMS.f0a526d5e24ac15ad4a33a3e86a8d6a6&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0",
            text:"Thinese smartphone maker Tecno has forayed into the laptop segment with the new Tecno MegaBook T1. The new laptop may attract a lot of potential customers because of the aggressive pricing despite offering up to Intel Core i7, 1TB SSD, and 16GB of RAM. The laptop boasts a sleek design, which may also resemble Apple MacBooks. It features an aluminium metal casing and a large trackpad. The display has a considerable chin with Tecno branding, which again resembles the MacBook branding on Apple laptops."
        },
        {
            id:15,
            category:"Technology",
            name:"Fastest Launch of FAST Services",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1c1alE.img?w=534&h=300&m=6",
            text:"Tata Elxsi, a global leader in product engineering and innovation-led design services, announced a strategic alliance with Ateme, a global leader in video compression, delivery, and streaming solutions with innovation at its core, to deliver a pre-integrated FAST (Free Ad-Supported Television) channel deployment solution, the company on Wednesday announced through an exchange filing."
        },
        {
            id:16,
            category:"Technology",
            name:"Over 50% of drugs to involve AI by 2030",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDMWy.img?w=534&h=300&m=6",
            text:"CPHI, a global community for pharmaceutical professionals, predicts that AI would transform all processes in drug development by 2026. Furthermore, by 2030, over 50 per cent of US FDA approvals are anticipated to involve AI-discovered and developed drugs."
        },
        {
            id:17,
            category:"Technology",
            name:"What Avinash Malladhi has to say",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDVC7.img?w=534&h=300&m=6&x=547&y=206&s=173&d=173",
            text:"In the rapidly evolving landscape of enterprise resource planning (ERP), the infusion of intelligence isn't merely a futuristic concept but a prominent reality that is reshaping the fabric of modern organizations already. This transformation is more than streamlined operations; it’s about the amalgamation of two concepts to exist in a symbiotic relationship."
        },
        {
            id:18,
            category:"Technology",
            name:"Gen AI has transformed the programming world",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDCqH.img?w=534&h=300&m=6",
            text:"My coding journey is reflective of the maxim: ‘Change is the only constant’. I started with FoxPro programming and have since worked with SQL, C++, Pl/SQL, Python, Spark, Julia and more. Over the years, advancements such as integrated development environments (IDEs) have been adding intelligence into coding with features like autocompletion, identification of syntactic errors, etc. However, the advent of generative AI has been a step change. AI models are fast becoming co-pilots for coders. The comprehension capability of LLMs has made it possible to generate code snippets and test cases, rapidly convert code from one programming language to another, predict and pre-empt problems, manage system documentation and find ways to optimise code."
        },
        {
            id:19,
            category:"Technology",
            name:"Next-gen firewalls needed as attack surface expands",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDG6P.img?w=398&h=716&m=6&x=120&y=151&s=251&d=430",
            text:"Today’s firewalls – next-gen firewalls as they are called – are more intelligent. They are application aware, which means they can recognise and classify applications passing through it, and help the system make decisions based on the application, its features, and the content it’s carrying. They also have intrusion prevention capability."
        },
        {
            id:20,
            category:"Technology",
            name:"New Hub For 5G Equipment Production:",
            image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDBGQ.img?w=534&h=293&m=6",
            text:"Samsung is eyeing India as a potential hub for its 5G equipment production, as it contemplates alternatives to China for its manufacturing expansion. The South Korean tech giant is weighing India against Vietnam for this shift"
        },
        
        //Hollywood
        {
            id:21,
            category:"Hollywood",
            name:"The god Father",
            image:"https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            text:"Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola."
        },
        {
            id:22,
            category:"Hollywood",
            name:"The Shawshank Redemption",
            image:"https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
            text:"The Shawshank Redemption is a 1994 American prison drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis Red Redding (Morgan Freeman), and becomes instrumental in a money laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles."
        },
        {
            id:23,
            category:"Hollywood",
            name:"Schindler's List",
            image:"https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
            text:"Ideas for a film about the Schindlerjuden (Schindler Jews) were proposed as early as 1963. Poldek Pfefferberg, one of the Schindlerjuden, made it his life's mission to tell Schindler's story. Spielberg became interested when executive Sidney Sheinberg sent him a book review of Schindler's Ark. Universal Pictures bought the rights to the novel, but Spielberg, unsure if he was ready to make a film about the Holocaust, tried to pass the project to several directors before deciding to direct it."
        },
        {
            id:24,
            category:"Hollywood",
            name:"Raging Bull",
            image:"https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg",
            text:"Raging Bull is a 1980 biographical sports drama film directed by Martin Scorsese123. The film chronicles the life of Jake LaMotta, a middleweight boxing champion known as The Raging Bull and The Bronx Bull 1. The film follows two decades of his life, and how the violence inside the ring was only an extension of his violence and temper outside of it1. The film is shot in black and white, except for the home video footage2."
        },
        {
            id:25,
            category:"Hollywood",
            name:"Casablanca",
            image:"https://th.bing.com/th?id=OIP.ANvFJpYlEHWLxYV13hcYMgHaKG&w=124&h=170&rs=1&qlt=80&o=6&dpr=1.3&pid=3.1",
            text:"Casablanca is a 1942 American film drama123that is based on a true story4. The film is set in Casablanca, Morocco during World War II15423, where refugees are looking for a way out of Europe5. The film follows Rick Blaine, a cynical expatriate American cafe owner, who has to choose between helping his former lover and her fugitive husband escape the Nazis or staying neutral15423. The film is one of the most celebrated and iconic motion pictures in history1."
        },
        {
            id:26,
            category:"Hollywood",
            name:"Citizen Kane",
           text:"Citizen Kane is a 1941 American drama film directed by, produced by, and starring Orson Welles. He and Herman J. Mankiewicz wrote the screenplay. The picture was Welles' first feature film. Citizen Kane is frequently cited as the greatest film ever made.[5] For 50 consecutive years, it stood at number 1 in the British Film Institute's Sight & Sound decennial poll of critics, and it topped the American Film Institute's 100 Years ... 100 Movies list in 1998, as well as its 2007 update. The film was nominated for Academy Awards in nine categories and it won for Best Writing (Original Screenplay) by Mankiewicz and Welles. Citizen Kane is praised for Gregg Toland's cinematography, Robert Wise's editing, Bernard Herrmann's music, and its narrative structure, all of which have been considered innovative and precedent-setting." 
           ,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/330px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
        },
        {
            id:27,
            category:"Hollywood",
            name:"THE EQUALIZER 3",
            image:"https://resizing.flixster.com/p-flbPaGEDrd6g8gSlp8wqOmDsg=/fit-in/180x240/v2/https://resizing.flixster.com/EjtgVtXHncPgHWXQxmtU__iEUoA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VlMDlkZDU4LTE3ZDctNGNmMy1iZmFkLWJiMzY5MmE1Zjg3ZC5qcGc=",
            text:"Actress Dakota Fanning was born Hannah Dakota Fanning in Conyers, Georgia. Her father was a former minor league baseball player and her mother a former tennis professional. Fanning began her acting career in small local productions at the Towne Lake Arts Center in Woodstock, Georgia, a town near where she lived with her family. Her first professional"
        },
        {
            id:28,
            category:"Hollywood",
            name:"Rebel Without a Cause",
            image:"https://m.media-amazon.com/images/M/MV5BYzk2ZDU3MmMtMDBmMi00YWIyLTkxM2YtZjg3MzgyOTAzZjg0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX140_CR0,0,140,209_AL_.jpg",
            text:"Rebel Without a Cause is a 1955 American coming-of-age romantic drama film about emotionally confused suburban, middle-class teenagers12345. It was directed by Nicholas Ray and filmed in the then recently introduced CinemaScope format1. The movie tells the story of an affluent family and their troubled son, Jim, who makes friends at the local high school with equally troubled teenagers, Judy and Plato3. The movie featured James Dean in one of his final roles; he died one month before the release245."
        },
        {
            id:29,
            category:"Hollywood",
            name:"The Third Man",
            image:"https://www.bing.com/th?id=OIP.9SBAtI5riUSU4ansxZyrGAHaLH&w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            text:"Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola."
        },
        {
            id:30,
            category:"Hollywood",
            name:"The god Father",
            image:"https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            text:"Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola."
        },



    ])
}