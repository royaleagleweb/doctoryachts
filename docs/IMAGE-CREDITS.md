# Image credits

Replacement photos for the outboard, mobile-repair, 300-hour, and marine-mechanic cards. All are real photographs cleared for commercial use. They were cover-cropped to 16:9 and exported at 1280×720 so they match the other files in `public/images`. `scripts/optimize-images.mjs` writes the responsive WebP files under `public/images/opt` at build time (256/384/640/750/828/1080/1280, quality 75).

## `public/images/service-outboard.jpg`

- **What it shows:** A mechanic leaning over the transom of a small boat, adjusting the carburetor on a Johnson outboard while the boat is on the water.
- **Replaces:** The previous file at this path, an inboard raw-water strainer and pump with blue hoses (no outboard in frame).
- **Title:** Engineer working on a boat engine
- **Author:** Steve Hillebrand, U.S. Fish and Wildlife Service
- **License:** Public domain. Released into the public domain by the author; Wikimedia Commons marks it public domain, attribution not required, commercial use allowed.
- **Source:** https://commons.wikimedia.org/wiki/File:Engineer_person_working_on_boat_engine.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/a/a4/Engineer_person_working_on_boat_engine.jpg
- **Processing:** Center cover-crop from 3000×2000 to 1280×720 JPEG (mozjpeg, quality 80).

## `public/images/service-mobile-repair.webp`

- **What it shows:** Two U.S. Coast Guard machinery technicians working on an outboard motor at the stern of a small boat on the water. Distinct from the outboard card (one person, carburetor close-up) and from `marine-mechanic.jpg` (a machinery technician on a cutter diesel).
- **Replaces:** The previous file at this path, which was a derivative of the old `marine-mechanic.jpg` (the same mechanic-and-cowling picture). That source file has since been replaced; see below.
- **Description:** Santo Domingo, Dominican Republic (Sept. 3, 2007). Machinery Technician 2nd Class Javier Carpio and Machinery Technician 1st Class Joseph Hernandez, of the U.S. Coast Guard International Training Division, conduct outboard motor maintenance training for Dominican Republic sailors during the Global Fleet Station pilot deployment. U.S. Navy photo ID 070903-N-0989H-013.
- **Author:** U.S. Navy photo by Mass Communication Specialist 1st Class David Hoffman
- **License:** Public domain. Work of a U.S. federal government employee made as part of official duties. Wikimedia Commons marks it public domain, not copyrighted, attribution not required.
- **Source:** https://commons.wikimedia.org/wiki/File:US_Navy_070903-N-0989H-013_The_U.S._Coast_Guard_International_Training_Division_conducts_outboard_motor_maintenance_training_for_Dominican_Republic_sailors_during_GFS_deployment.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/5/55/US_Navy_070903-N-0989H-013_The_U.S._Coast_Guard_International_Training_Division_conducts_outboard_motor_maintenance_training_for_Dominican_Republic_sailors_during_GFS_deployment.jpg
- **Processing:** Center cover-crop from 1200×797 to 1280×720 WebP (quality 78). The source file on Commons is 1200px wide, so the export is a slight upscale to match the other 1280×720 cards.

These are documentary photographs, not Doctor Yachts job photos. A photo from an actual Fort Lauderdale dock visit would still be the better long-term image for the mobile-repair page if Roy has one — this one shows Coast Guard training, not a marina service call.

## `public/images/service-hour-300.jpg`

- **What it shows:** A Yanmar 6LPA marine diesel installed in a Corvette 320 motor yacht engine bay: silver valve cover with the Yanmar name, black hoses, a belt, and a filter. It is not the blue-hose engine bay in `service-engine.jpg`.
- **Used for:** The 300-hour service card, which previously reused `service-engine.jpg`.
- **Title:** Photo showing installation of Yanmar 6LPA diesel engine in a Corvette 320 motoryacht
- **Author:** DavidPaygate
- **License:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Commercial use is allowed. Attribution is required, and adaptations stay under the same license. This file is an adaptation (center cover-crop and resize).
- **Attribution:** Photo by DavidPaygate, via Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:Photo_of_Yanmar_6LPA_engine_in_Corvette_320.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/6/6d/Photo_of_Yanmar_6LPA_engine_in_Corvette_320.jpg
- **Processing:** Center cover-crop from 2357×2388 to 1280×720 JPEG (mozjpeg, quality 80).

The Dania Beach card uses the existing `public/images/marine-marina.jpg`. The homepage story photos (`marine-helm.jpg`, `marine-bilge.jpg`, `marine-lines.jpg`, `gallery-teak.jpg`) were already in the repo and were not on the homepage.

## `public/images/marine-mechanic.jpg`

- **What it shows:** A U.S. Coast Guard machinery technician in blue coveralls, leaning over the main diesel of the cutter Eagle with a wrench on the engine. Valve cover, injectors, and fuel lines are in frame. It is not the outboard carburetor photo, the two-person stern outboard photo, or the Yanmar engine-bay still life.
- **Replaces:** The previous file at this path, an AI-looking dockside scene: an engine hatch swung open over a tangle of wiring and a mangled outboard.
- **Description:** Key West, Fla. (April 12, 2012). Petty Officer 2nd Class Carlos Camacho, a machinery technician aboard the Coast Guard Cutter Eagle, removes the cotter pin from a replacement saltwater pump for the ship's main diesel engine. U.S. Coast Guard photo 120412-G-RU729-140 by Petty Officer 1st Class Brandyn Hill.
- **Author:** U.S. Coast Guard photo by Petty Officer 1st Class Brandyn Hill
- **License:** Public domain. Work of a U.S. federal government employee made as part of official duties. Wikimedia Commons marks it public domain, not copyrighted, attribution not required, commercial use allowed.
- **Source:** https://commons.wikimedia.org/wiki/File:CGC_Eagle_engineers_repair_ship%27s_engine_120412-G-RU729-140.jpg
- **DVIDS:** https://www.dvidshub.net/image/1116709
- **File:** https://upload.wikimedia.org/wikipedia/commons/d/d9/CGC_Eagle_engineers_repair_ship%27s_engine_120412-G-RU729-140.jpg
- **Processing:** Center cover-crop from 4256×2832 to 1280×720 JPEG (mozjpeg, quality 80).

This is a documentary photograph of cutter maintenance, not a Doctor Yachts job at a Fort Lauderdale marina. The engine is a ship's main diesel, larger than a typical yacht inboard. Alt text says it is a Coast Guard technician on the cutter Eagle. A photo from an actual dock visit would still be the better long-term image for the 100-hour card if Roy has one.

The same file is the 100-hour card, the About and FAQ heroes (English and Spanish), and the shared mechanic image on service detail pages.
