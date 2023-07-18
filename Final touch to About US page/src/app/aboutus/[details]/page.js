"use client"

import { usePathname } from 'next/navigation';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

const AboutUsDetails = () => {
  const path=usePathname()
  const id = parseInt(path.match(/\d+/)[0]);

  const teamMember = details.find((member) => member.id === parseInt(id));

  if (!teamMember) {
    return <div>Developer doesn't exist</div>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <p>{teamMember.role}</p>
    </div>
  );
};

export default AboutUsDetails;
