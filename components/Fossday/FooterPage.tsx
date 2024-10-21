import React from 'react';
import { Text } from "../ui/text";
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Text variant="fossday" coloring="fossday-yellow" size="h3">About FOSSDAY</Text>
            <p className="mt-2">FOSSDAY is an exciting event bringing the open source software community to SJCET. Join us to learn, explore, and contribute to the world of open source.</p>
          </div>
          <div>
            <Text variant="fossday" coloring="fossday-yellow" size="h3">Quick Links</Text>
            <ul className="mt-2">
              <li><Link href="/app/contactus" className="hover:text-fossday-yellow">About</Link></li>
              <li><Link href="/fossday/register" className="hover:text-fossday-yellow">Register</Link></li>
              <li><Link href="/fossday/speaker/page" className="hover:text-fossday-yellow">Become a Speaker</Link></li>
            </ul>
          </div>
          <div>
            <Text variant="fossday" coloring="fossday-yellow" size="h3">Contact Us</Text>
            <p className="mt-2">St Joseph's College of Engineering and Technology, Palai</p>
            <p>Email: nexus@sjcetpalai.ac.in</p>
            <p>Phone: +917594025304</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Text coloring="white" size="p">&copy; 2024 FOSSDAY.  All softwares opensource-ed.</Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;