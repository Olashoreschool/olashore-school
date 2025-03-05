import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const FindUs = () => (
  <Tabs selectedTabClassName="bg-[#EEF2FF] p-8 rounded-lg text-[var(--primary-color)]">
    <TabList>
      <Tab>From Lagos</Tab>
      <Tab>From Abuja</Tab>
      <Tab>From Rivers State</Tab>
      <Tab>From Delta State</Tab>
    </TabList>

    <TabPanel>
      <ul className="space-y-3 list-[square] pl-8">
        <li> Follow Lagos/Ibadan Express way on the E1 to Iwo Road, Ibadan.</li>
        <li>
          Take 2nd exit at roundabout to join the Ibadan/Ife Express way (A122),
          continue on the A122 until the roundabout at the Ife junction
        </li>
        <li>
          Take the 2nd exit at the roundabout unto the Ibadan/Ilesha Express
          way, pass by Gbongan. After 43KM, turn left onto the New Iloko-Ijesa
          road for 4.6km, then turn left onto Oba Oladele Olashore Way,
          Iloko-Ijesa.
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="space-y-3 list-[square] pl-8">
        <li>
          From Nnamdi Azikiwe International airport, Abuja, head northwest on
          the Rink road 4 for 7.4 Km, take a left to staying on Ring road 4 for
          62Km passing by Nigerian Civil Aviation Authority on the right. Take a
          right turn to merge on aiport road and continue for 68Km.
        </li>
        <li>
          Merge on to Aiport road and continue for 120km the merge on to the
          Abuja-Lokoja road/A2. Continue on the A2 passing the gas station on
          the left (11.okm) for 219Km. Take a left turnon to F119, turn left
          after 1.0km and a sharp left onto F220 after 1.6km.
        </li>
        <li>
          Take a right turn after 21.8km, a left after 6.1km then q right turn
          after 2.0km. Continue and pass by WEMA Bank after 2.6km. Continue onto
          the F215 after 450m then at the roundabout, take the 2nd exit afnd
          continue for 23.6k. Keep right to stay on the Ifaki-Oye-Ikole road and
          pass gas station in 29.2km.
        </li>
        <li>
          At the roundabout, take 2nd exit onto Ado Ekiti-Ifaki road. After
          450m, turn right onto Ifaki – Esure road. Take a sharp right after
          20.5km onto Ado Ekiti-Igede-Aramoko road and go pass Baptist College
          of Theology in 1.1km. Continue straight to stay on Ado Ekiti-Igede
          -Aramoko road for 27.4km. Turn left towards Ijeda Ijesa Rd/Oba Oladele
          Olashore Way for 220m, then right for 82m and left onto IjedaIjesa
          road/Oba Oladele Olashore Way for 800m.
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="space-y-3 list-[square] pl-8">
        <li>
          Take the East-West road/A2 in Elele Alimini and head southwest towards
          Trans Amadi-Umurola roadfor 300m, turn left onto Trans Amadi-Umurola
          raod along Slaughter market for 450m. Take a right turn onto
          Trans-Amadi Industrial layout roas driving pass halliburton Energy
          Servises Nigeria Limited in 400 m. Turn right at Slot onto Old road in
          800m, then left at Mizbeach on to Eliozu rd/Okporo road in 2.5km.
        </li>
        <li>
          Continue on Eliozu rd/Okporo road which turns right and becomes
          East-West road for 1.2km. Make a U-turn after another 4.9km at the
          roundabout, take the 3rd exit and stay on the East-East road for
          7.1km. Continue on the road for 35.3km pas Choba Divisional Police
          Station. At the round about, take 2nd exit onto East-West road/A2.
        </li>
        <li>
          At the next roundabout, take 1st exit onto Benin-Sapele-Warri
          road/Effurun Ugehelli raod/A2 and continue for 4.2km. Continue onto
          Benin-Sapele-Warri raod for 11.4km. The road turns right and becomes
          A2 and in 15.9km at the roundabout, take the 2nd exit and continue on
          the A2 for 44.9km.
        </li>
        <li>
          Exit Benin City Bypass in 26.5km and slight right towards Benin Auchi
          rd/Ekpoma Benin road for 140m. Continue right on the Benin Auchi
          rd/Ekpoma Benin road for 3.1km. Turn left after 18.7km then right afte
          the gas sattion on to A122 in 195km. Drive to Oba Oladele Olashore Way
          by turning right and after 650m turn left and drive for 2.6km and
          continue ont Oba Oladele Olashore Way.
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul className="space-y-3 list-[square] pl-8">
        <li>
          From Warri continue onto Warri Port Expressway/A2 heading north
          towards Ugbomor road for 400m, turn left on to Ugbomor road continuing
          for 180m. Take a right turn on P.T.I road passing Zenith bank for 2km.
          Turn left onto the A2 and at th roundabout, take 1st exit onto
          Benin-Sapele-Warri road/Effurub Ughelli road/A2 and continue on for
          11.4km.
        </li>
        <li>
          Benin-Sapele-Warri road turns right slightly and becomes A2, in 15.9km
          at the round about, take the 2nd exit onto Benin-Sapelerd/Benin-Warri
          road/A2 for 44.9km.
        </li>
        <li>
          Exit onto Benin City Bypass in 2.5km. Slight right towards Benin Auchi
          rd/Ekpoma Benin road and continue for 110m. Take righ onto Benin Auchi
          rd/Ekpoma Benin road for 3.1km. In 18.7km, turn left. Theb turn righ
          onto A122 passing the gas station.
        </li>
        <li>
          After 195km, turn right then left to head towards Oba Oladele Olashore
          Way.
        </li>
      </ul>
    </TabPanel>
  </Tabs>
);

export default FindUs;
