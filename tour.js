window.tourConfig = {
    "default": {
        "firstScene": "scene1",
        "sceneFadeDuration": 1000,
        "compass": false,
        "showControls": false
    },
    "scenes": {
        "scene1": {
            "type": "equirectangular",
            "panorama": "img/scene1.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -50,
            "maxPitch": 50,
            "hotSpotDebug": true,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 45,
                    "type": "scene",
                    "text": "Ελαιοτριβείο",
                    "sceneId": "scene2"
                },
                {
                    "pitch": 30,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Καθιστικό",
                    "sceneId": "scene3"
                },
                {
                    "pitch": -30,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Κουζίνα/Σχολείο",
                    "sceneId": "scene4"
                },
                {
                    "pitch": 10,
                    "yaw": 16,
                    "type": "scene",
                    "text": "Μηχανοστάσιο",
                    "sceneId": "scene5"
                },
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "Διάφορα Πράγματα/ Αργαλειός",
                    "sceneId": "scene6"
                },
                {
                    "pitch": 31,
                    "yaw": 2,
                    "type": "scene",
                    "text": "Υπνοδωμάτιο",
                    "sceneId": "scene7"
                },
                {
                    "pitch": 4,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Διάφορα Εργαλία/ Μύλος",
                    "sceneId": "scene8"
                }
                
            ]
        },
        "scene2": {
            "type": "equirectangular",
            "panorama": "img/scenetest2.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -10,
            "maxPitch": 10,
            "pitch": 0,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 15,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Επιστροφή στο αρχικό δωμάτιο",
                    "sceneId": "scene1"
                },
                {
                    "pitch": -30,
                    "yaw": 20,
                    "type": "info",
                    "text": "Η έκθλιψη της ελιάς ξεκινούσε με το άδειασμα των ελιών στις μυλόπετρες, όπου με τη βοήθεια της πετρελαιομηχανής πολτοποιούνταν μαζί με τα κουκούτσια και τα φλούδια. Ο πολτός αυτός τοποθετούνταν σε ειδικά σχοινένια τσουβάλια (τσουπιά), τα οποία πίεζαν οι μηχανές για να στραγγίξει το λάδι στις δεξαμενές. Από εκεί, το λάδι συγκεντρωνόταν σε λαγήνες και πιθάρια για μεταφορά στους ιδιοκτήτες."
                },
                {
                    "pitch": 15,
                    "yaw": 45,
                    "type": "info",
                    "text": "Ζυγαριά για τα τσουβάλια με τις ελιές και για άλλα μεγάλα βάρη"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videoelaiotrivio.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                }
            ]
        },
        "scene3": {
            "type": "equirectangular",
            "panorama": "img/scene3.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -30,
            "maxPitch": 30,
            "pitch": 0,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Επιστροφή στο αρχικό δωμάτιο",
                    "sceneId": "scene1"
                },
                {
                    "pitch": -5,
                    "yaw": 30,
                    "type": "info",
                    "text": "Το παραδοσιακό σαλόνι είναι μια γωνιά γεμάτη νοσταλγία και πολιτιστική ταυτότητα. Με ξύλινα έπιπλα, κεντήματα και παλιές φωτογραφίες, αναδεικνύει την απλότητα, τη φιλοξενία και τις οικογενειακές στιγμές του παρελθόντος."
                },
                {
                    "pitch": -5,
                    "yaw": -80,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videosaloni1.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": -10,
                    "yaw": 60,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videosaloni2.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": -15,
                    "yaw": 100,
                    "type": "info",
                    "text": "Μπουφές σαλονιού"
                },
                {
                    "pitch": -15,
                    "yaw": -100,
                    "type": "info",
                    "text": "Καναπές σαλονιού"
                },
                {
                    "pitch": -40,
                    "yaw": -100,
                    "type": "info",
                    "text": "Τραπέζι σαλονιού"
                },
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "info",
                    "text": "Γωνία με τζάκι όπου μαγείρευαν, έτρωγαν στο χαμηλό τραπέζι τον σοφρά"
                },
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "img/scenetest.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -30,
            "maxPitch": 30,
            "pitch": 0,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Επιστροφή στο αρχικό δωμάτιο",
                    "sceneId": "scene1"
                },
                {
                    "pitch": -30,
                    "yaw": -5,
                    "type": "info",
                    "text": "Γουδιά"
                },
                {
                    "pitch": 0,
                    "yaw": 5,
                    "type": "info",
                    "text": "Γκαζιέρα πετρελαίου"
                },
                {
                    "pitch": 20,
                    "yaw": 45,
                    "type": "info",
                    "text": "Φανάρι αποθήκευσης τροφίμων το πρώτο είδος συντήρησης και προφύλαξης για τα τρόφιμα"
                },
                {
                    "pitch": 3,
                    "yaw": 40,
                    "type": "info",
                    "text": "Κουζίνα  με αέριο και κατσαρόλες"
                },
                {
                "pitch": -5,
                "yaw": 75,
                "type": "info",
                "text": "Ψυγείο πάγου στάμνα βρυσάκι"
            },
                {
                    "pitch": 10,
                    "yaw": 30,
                    "type": "info",
                    "text": "Πιατοθήκη"
                },
                {
                    "pitch": -10,
                    "yaw": -40,
                    "type": "info",
                    "text": "Σχολικά ξύλινα θρανία και ποδιές που φορούσαν οι μαθητές."
                },
                {
                    "pitch": -10,
                    "yaw": -55,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videosxoleio.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": -10,
                    "yaw": 75,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videokouzina.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": -10,
                    "yaw": 50,
                    "type": "info",
                    "text": "Φουφού με κάρβουνα για μαγείρεμα φαγητού και τραχανά καθώς και για ζέσταμα νερού στο καζάνι."
                },
                {
                    "pitch": -35,
                    "yaw": 30,
                    "type": "info",
                    "text": "Πέτρινος χειρόμυλος για την παραγωγή αλευριού"
                },
            ]
        },
        
        "scene5": {
            "type": "equirectangular",
            "panorama": "img/scene5.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -30,
            "maxPitch": 30,
            "pitch": 0,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 130,
                    "type": "scene",
                    "text": "Επιστροφή στο αρχικό δωμάτιο",
                    "sceneId": "scene1"
                },
                {
                    "pitch": -5,
                    "yaw": 15,
                    "type": "info",
                    "text": "Μηχανή πετρελαίου για την δημιουργία πίεσης για τις ελαιο μηχανές"
                },
                {
                    "pitch": -5,
                    "yaw": -30,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videomixanostasio.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                }
                
            ]
        },
        "scene6": {
            "type": "equirectangular",
            "panorama": "img/scene6.jpg",
            "autoLoad": true,
            "hfov": 120,
            "minPitch": -30,
            "maxPitch": 30,
            "pitch": 0,
            "yaw": 0,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Επιστροφή στο αρχικό δωμάτιο",
                    "sceneId": "scene1"
                },
                {
                    "pitch": 20,
                    "yaw": -5,
                    "type": "info",
                    "text": "Παιδικά παιχνίδια"
                },
                {
                    "pitch": -20,
                    "yaw": 20,
                    "type": "info",
                    "text": "Ραδιόφωνα και πικάπ του 1932"
                },
                {
                    "pitch": -20,
                    "yaw": 5,
                    "type": "info",
                    "text": "Ρολόγια με κουρντιστήρι και ξυπνητήρι"
                },
                {
                    "pitch": -10,
                    "yaw": -100,
                    "type": "info",
                    "text": "Μύλοι που άλεθαν τον καφέ και μετά τον καβούρντιζαν"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "info",
                    "text": "Είδη καφενείου με τα μπρίκια και την χόβολη από πυρήνα"
                },
                {
                    "pitch": 10,
                    "yaw": -40,
                    "type": "info",
                    "text": "Ζυγαριές παντοπωλείου, μανάβη,καντάρια"
                },
                {
                    "pitch": -15,
                    "yaw": 65,
                    "type": "info",
                    "text": "Χτένια για τον αργαλειό ανάλογα με το ύφασμα που ήθελαν να υφάνουν"
                },
                {
                    "pitch": -10,
                    "yaw": 110,
                    "type": "info",
                    "text": "Αργαλειός:Το μαλλί από τα ζώα το (ξαίναν) δηλαδή το χτενίζαν και το ετοίμαζαν για να  το περάσουν από το αδράχτι όπου θα γινότανε κλωστή."
                },
                {
                    "pitch": 40,
                    "yaw": 40,
                    "type": "info",
                    "text": "Είδη μεταφοράς λαδιού,κρασιού, γάλακτος, λαχανικών, ελιών"
                },
                {
                    "pitch": -5,
                    "yaw": 90,
                    "type": "info",
                    "text": "Η ανέμη όπου τύλιγαν την κλωστή."
                },
                {
                    "pitch": -5,
                    "yaw": -80,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videopragmata1.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": 32,
                    "yaw": 45,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videopragmata2.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                },
                {
                    "pitch": 0,
                    "yaw": 90,
                    "type": "info",
                    "text": `
                    
                        <div>
                            <video width="250" controls>
                                <source src="video/videopragmata3.mp4" type="video/mp4">
                                Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                            </video>
                        </div>
                    `
                }
            ]
        },
        "scene7": {
    "type": "equirectangular",
    "panorama": "img/scene7.jpg",
    "autoLoad": true,
    "hfov": 120,
    "minPitch": -30,
    "maxPitch": 30,
    "pitch": 0,
    "yaw": 0,
    "hotSpots": [
        {
            "pitch": 10,
            "yaw": -90,
            "type": "scene",
            "text": "Επιστροφή στο αρχικό δωμάτιο",
            "sceneId": "scene1"
        },
        {
            "pitch": -5,
            "yaw": 15,
            "type": "info",
            "text": "Το παλιό υπνοδωμάτιο αποπνέει ηρεμία και οικογενειακή θαλπωρή. Με ξύλινα έπιπλα, υφαντά σεντόνια και εικόνες στους τοίχους, διατηρεί τη ζεστασιά μιας εποχής όπου η απλότητα συνδυαζόταν με την αγάπη για το σπίτι."
        },
        {
            "pitch": -5,
            "yaw": -30,
            "type": "info",
            "text": `
            
                <div>
                    <video width="250" controls>
                        <source src="video/videoupnodomatio1.mp4" type="video/mp4">
                        Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                    </video>
                </div>
            `
        },
        {
            "pitch": -5,
            "yaw": -80,
            "type": "info",
            "text": `
            
                <div>
                    <video width="250" controls>
                        <source src="video/videoupnodomatio2.mp4" type="video/mp4">
                        Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                    </video>
                </div>
            `
        },
        {
            "pitch": 0,
            "yaw": -110,
            "type": "info",
            "text": "Σπάνιες εκδόσεις βιβλίων"
        },
        {
            "pitch": 20,
            "yaw": 43,
            "type": "info",
            "text": "Κρεβάτι με εικονοστάσι και στεφανοθήκες"
        },
        {
            "pitch": -10,
            "yaw": 80,
            "type": "info",
            "text": "Όπλα κυνηγιού"
        },
        
    ]
},"scene8": {
    "type": "equirectangular",
    "panorama": "img/scene8.jpg",
    "autoLoad": true,
    "hfov": 120,
    "minPitch": -30,
    "maxPitch": 30,
    "pitch": 0,
    "yaw": 0,
    "hotSpots": [
        {
            "pitch": 10,
            "yaw": 30,
            "type": "scene",
            "text": "Επιστροφή στο αρχικό δωμάτιο",
            "sceneId": "scene1"
        },
        {
            "pitch": -5,
            "yaw": 15,
            "type": "info",
            "text": "Μυλόπετρες που κινούνταν με την   βοήθεια της πετρελαιομηχανής για να συνθλίψουν τις ελιές."
        },
        {
            "pitch": 0,
            "yaw": -70,
            "type": "info",
            "text": "Καλαπόδια για να υπολογίζει ο τσαγκάρης το μέγεθος του παπουτσιού που θα κατασκεύαζε"
        },
        {
            "pitch": 0,
            "yaw": -48,
            "type": "info",
            "text": "Είδη φωτισμού λάμπες πετρελαίου και για περισσότερο φωτισμό στο κάτω ράφι οι λάμπες πετρελαίου Λουξ"
        },
        {
            "pitch": -5,
            "yaw": -30,
            "type": "info",
            "text": `
            
                <div>
                    <video width="250" controls>
                        <source src="video/videoergalia1.mp4" type="video/mp4">
                        Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                    </video>
                </div>
            `
        },
        {
            "pitch": -5,
            "yaw": 60,
            "type": "info",
            "text": `
            
                <div>
                    <video width="250" controls>
                        <source src="video/videoergalia2.mp4" type="video/mp4">
                        Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                    </video>
                </div>
            `
        },
        {
            "pitch": -5,
            "yaw": 75,
            "type": "info",
            "text": "Σίδερα για τα ρούχα που τα ζεσταίνονταν με κάρβουνα"
        },
        {
            "pitch": 10,
            "yaw": 40,
            "type": "info",
            "text": `
            
                <div>
                    <video width="250" controls>
                        <source src="video/videoergalia3.mp4" type="video/mp4">
                        Το βίντεο δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.
                    </video>
                </div>
            `
        },
    ]
}

    }
};
