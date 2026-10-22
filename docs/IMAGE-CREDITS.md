# Image credits

Replacement photos for the outboard and mobile-repair cards. Both are real photographs, public domain, and cleared for commercial use. They were center-cropped to 16:9 and exported at 1280×720 so they match the other files in `public/images`. `scripts/optimize-images.mjs` writes the responsive WebP files under `public/images/opt` at build time (256/384/640/750/828/1080/1280, quality 75). `marine-mechanic.jpg` is unchanged.

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

- **What it shows:** Two U.S. Coast Guard machinery technicians working on an outboard motor at the stern of a small boat on the water. Distinct from the outboard card (one person, carburetor close-up) and from `marine-mechanic.jpg`.
- **Replaces:** The previous file at this path, which was a derivative of `marine-mechanic.jpg` (the same mechanic-and-cowling picture).
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

The 100-hour card now uses the existing `public/images/marine-mechanic.jpg` (a mechanic working dockside on a boat engine). That file was already in the repo and was not on the homepage. The Dania Beach card uses the existing `public/images/marine-marina.jpg`. The homepage story photos (`marine-helm.jpg`, `marine-bilge.jpg`, `marine-lines.jpg`, `gallery-teak.jpg`) were already in the repo and were not on the homepage.
