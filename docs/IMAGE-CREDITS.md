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

The same file is the 100-hour card, the About and FAQ heroes (English and Spanish), and the shared mechanic image on service detail pages. The gallery also uses it as a diesel reference photo.

## Gallery (`/gallery`)

The gallery page no longer uses the AI-looking files that were on it (`gallery-hull.jpg`, `gallery-teak.jpg`, `service-engine.jpg`, `service-electrical.jpg`, `service-diagnostics.jpg`, `service-maintenance.jpg`, `service-systems.jpg`, `marine-bilge.jpg`, and the `yacht-*.jpg` marina set). Those files are still on other pages. The gallery uses the four real photos already credited above, plus the new files below. None of them are Doctor Yachts job photos. New files are 1280×720 JPEG (mozjpeg, quality 80). `scripts/optimize-images.mjs` writes the responsive WebP files. The gallery share card is `public/images/og/gallery.jpg`, a 1200×630 center cover-crop of `gallery-outboard-overhaul.jpg`.

There is no Spanish gallery page. `/gallery` is English only.

### Reused on the gallery (already credited above)

- `public/images/marine-mechanic.jpg` — Coast Guard machinery technician on the cutter Eagle's main diesel.
- `public/images/service-hour-300.jpg` — Yanmar 6LPA in a motor yacht engine bay. CC BY-SA 4.0, DavidPaygate.
- `public/images/service-outboard.jpg` — mechanic on a Johnson outboard carburetor. U.S. Fish and Wildlife Service, public domain.
- `public/images/service-mobile-repair.webp` — two Coast Guard machinery technicians on an outboard at the stern. U.S. Navy photo, public domain.

### `public/images/gallery-outboard-overhaul.jpg`

- **What it shows:** International students working on an outboard motor under a roof during the Outboard Motor Maintenance and Overhaul course at Naval Small Craft Instruction and Technical Training School, Stennis Space Center, Mississippi (Sept. 14, 2015). U.S. Navy photo 150914-N-YM440-057.
- **Author:** Senior Chief Mass Communication Specialist Gary Ward, U.S. Navy
- **License:** Public domain. Work of a U.S. federal government employee made as part of official duties. Wikimedia Commons marks it public domain (`PD-USGov-Military-Navy`). Attribution is not required.
- **Source:** https://commons.wikimedia.org/wiki/File:Students_work_on_an_outboard_motor._(21258483309).jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/c/cd/Students_work_on_an_outboard_motor._%2821258483309%29.jpg
- **Processing:** Center cover-crop from 3000×2000 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-outboard-wiring.jpg`

- **What it shows:** Port Antonio, Jamaica (Sept. 26, 2007). Machinery Technician 2nd Class Javier Carpio, U.S. Coast Guard International Training Division, helps Jamaica Defense Force members troubleshoot an outboard with the cowling off and the wiring exposed. U.S. Navy photo ID 070926-N-0989H-014.
- **Author:** U.S. Navy photo by Mass Communication Specialist 1st Class David Hoffman
- **License:** Public domain. Work of a U.S. federal government employee made as part of official duties. Wikimedia Commons marks it public domain. Attribution is not required.
- **Source:** https://commons.wikimedia.org/wiki/File:US_Navy_070926-N-0989H-014_Machinery_Technician_2nd_Class_Javier_Carpio,_from_the_U.S._Coast_Guard_International_Training_Division,_assists_members_of_the_Jamaica_Defense_Force_with_troubleshooting_an_engine.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/a/a9/US_Navy_070926-N-0989H-014_Machinery_Technician_2nd_Class_Javier_Carpio%2C_from_the_U.S._Coast_Guard_International_Training_Division%2C_assists_members_of_the_Jamaica_Defense_Force_with_troubleshooting_an_engine.jpg
- **Processing:** Center cover-crop from 2700×1793 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-electrical-panels.jpg`

- **What it shows:** Electrical panels, analog meters, switches, and cable runs in the engine room of the steamship Virginia V at Historic Ships Wharf, South Lake Union, Seattle. A brass wheel is in the foreground. This is a historic ship, not a Fort Lauderdale yacht.
- **Author:** Joe Mabel
- **License:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Commercial use is allowed. Attribution is required, and adaptations stay under the same license. This file is an adaptation (cover-crop and resize).
- **Attribution:** Photo by Joe Mabel, via Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:Virginia_V_(ship,_1922)_engine_room_05_-_modern_electrical_panels.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/4/4a/Virginia_V_%28ship%2C_1922%29_engine_room_05_-_modern_electrical_panels.jpg
- **Processing:** Attention cover-crop from 4288×2848 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-teak-deck.jpg`

- **What it shows:** A Plastimo compass and weathered teak deck planks on a sailing yacht. It replaces the gallery's use of `gallery-teak.jpg` (that AI file is still used elsewhere).
- **Author:** Stefan Götte
- **License:** Public domain. The author released the photograph (`PD-self` on Wikimedia Commons). Attribution is not required.
- **Source:** https://commons.wikimedia.org/wiki/File:Teakdeck.JPG
- **File:** https://upload.wikimedia.org/wikipedia/commons/4/42/Teakdeck.JPG
- **Processing:** Cover-crop from 2304×1728, biased toward the top of the frame so a shoe at the bottom edge is out of the crop, then resized to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-ftl-intracoastal.jpg`

- **What it shows:** A motor yacht underway on the Intracoastal Waterway in Fort Lauderdale, with waterfront houses and palms on the far bank.
- **Author:** Wikimedia Commons user U+1F360
- **License:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Commercial use is allowed. Attribution is required, and adaptations stay under the same license. This file is an adaptation (cover-crop and resize).
- **Attribution:** Photo by U+1F360, via Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:Fort_Lauderdale_Intracoastal_Waterway.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/e/e6/Fort_Lauderdale_Intracoastal_Waterway.jpg
- **Processing:** South-weighted cover-crop from 6000×4000 to 1280×720 JPEG (mozjpeg, quality 80), keeping the yacht in frame.

### `public/images/gallery-ftl-new-river.jpg`

- **What it shows:** A motor yacht tied bow-in at a dock on the New River in downtown Fort Lauderdale, with the skyline and a riverwalk behind it.
- **Author:** Alistair Cunningham
- **License:** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Commercial use is allowed. Attribution is required. This file is an adaptation (center cover-crop and resize).
- **Attribution:** Photo by Alistair Cunningham, via Wikimedia Commons, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:New_River_-_panoramio.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/8/8e/New_River_-_panoramio.jpg
- **Processing:** Center cover-crop from 2048×1536 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-ftl-marinas.jpg`

- **What it shows:** Aerial view of yacht basins along the New River in Fort Lauderdale, with Interstate 95 crossing the river and the city skyline in the distance.
- **Author:** formulanone (Flickr)
- **License:** [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Commercial use is allowed. Attribution is required, and adaptations stay under the same license. This file is an adaptation (center cover-crop and resize).
- **Attribution:** Photo by formulanone, via Wikimedia Commons, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:New_River_South_Fork_(30392885610).jpg
- **Flickr:** https://www.flickr.com/photos/formulanone/30392885610/
- **File:** https://upload.wikimedia.org/wikipedia/commons/6/67/New_River_South_Fork_%2830392885610%29.jpg
- **Processing:** Center cover-crop from 2400×1600 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-ftl-harbor.jpg`

- **What it shows:** Yachts and small boats on the Intracoastal in Fort Lauderdale, cropped from a panorama taken from the 17th Street Bridge facing northeast toward Harbor Beach.
- **Author:** Kolossos (Wikimedia Commons)
- **License:** [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Commercial use is allowed. Attribution is required, and adaptations stay under the same license. This file is an adaptation (center cover-crop and resize).
- **Attribution:** Photo by Kolossos, via Wikimedia Commons, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:Fort_Lauderdale-harbor.jpg
- **File:** https://upload.wikimedia.org/wikipedia/commons/7/73/Fort_Lauderdale-harbor.jpg
- **Processing:** Center cover-crop from 6103×1218 to 1280×720 JPEG (mozjpeg, quality 80).

### `public/images/gallery-ftl-stern.jpg`

- **What it shows:** The stern of the yacht Promise, with "FORT LAUDERDALE, FL" lettered on the transom.
- **Author:** Jonathan Palombo
- **License:** [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Commercial use is allowed. Attribution is required. This file is an adaptation (center cover-crop and resize).
- **Attribution:** Photo by Jonathan Palombo, via Wikimedia Commons, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Cropped and resized for this site.
- **Source:** https://commons.wikimedia.org/wiki/File:Promise_(8619531660).jpg
- **Flickr:** https://www.flickr.com/photos/57778372@N04/8619531660/
- **File:** https://upload.wikimedia.org/wikipedia/commons/0/0a/Promise_%288619531660%29.jpg
- **Processing:** Center cover-crop from 2500×1667 to 1280×720 JPEG (mozjpeg, quality 80).
