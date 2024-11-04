// import Link from "next/link";
// import styles from "./page.module.css"; // Use if you have styles, otherwise remove

// export default function Home() {
//   return (
//     <div>
//       <h1>Country List</h1>
//       <ul className={styles.countryList}> {/* Use styles if defined */}
//         {['pakistan', 'india', 'japan', 'saudia', 'turkey', 'iran'].map(country => (
//           <li key={country} className={styles.custButton}> {/* Use styles if defined */}
//             <Link href={`/country/${country}`}>
//               {country.charAt(0).toUpperCase() + country.slice(1)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import Image from "next/image";
//import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Country List</h1>
        <ul className="d-flex">
          
          <li className="cust_button"><Link className="" href="/country/pakistan">Pakistan</Link></li>

          <li className="cust_button"><Link className="" href="/country/india">India</Link></li>

          <li className="cust_button"><Link className="" href="/country/japan">Japan</Link></li>

          <li className="cust_button"><Link className="" href="/country/saudia">Saudia</Link></li>

          <li className="cust_button"><Link className="" href="/country/turkey">Turkey</Link></li>

          <li className="cust_button"><Link className="" href="/country/iran">Iran</Link></li>

        </ul>
    </div>
  );
}
