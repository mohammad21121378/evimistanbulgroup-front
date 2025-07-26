import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  avatar: string;
}

const TeamCard = ({ name, role, avatar }: TeamCardProps) => {
  return (
    <div className="bg-slate-100 outline outline-1 outline-slate-200 rounded-2xl p-6 w-full flex flex-col items-center">
      <div className="bg-white rounded-full flex items-center justify-center mb-6">
        <Image
          src={avatar}
          alt={name}
          width={100}
          height={100}
          className="rounded-full !size-24 object-top object-cover"
        />
      </div>
      <h3 className="text-xl font-medium text-black">{name}</h3>
      <p className="text-base text-slate-500 mt-1">{role}</p>
    </div>
  );
};

export default TeamCard;
