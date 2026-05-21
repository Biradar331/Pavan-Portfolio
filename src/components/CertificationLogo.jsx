import { FiAward } from 'react-icons/fi';
import { FaAws } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';
const logoConfig = {
  tcs: {
    type: 'text',
    label: 'TCS',
    sublabel: 'iON',
    className: 'cert-logo-tcs',
  },
  aws: {
    type: 'icon',
    Icon: FaAws,
    className: 'cert-logo-aws',
  },
  udemy: {
    type: 'icon',
    Icon: SiUdemy,
    className: 'cert-logo-udemy',
  },
  conference: {
    type: 'icon',
    Icon: FiAward,
    className: 'cert-logo-conference',
  },
};

export default function CertificationLogo({ logo = 'tcs' }) {
  const config = logoConfig[logo] || logoConfig.tcs;

  if (config.type === 'text') {
    return (
      <div className={`cert-logo-badge ${config.className}`} aria-hidden>
        <span className="text-sm font-bold tracking-tight">{config.label}</span>
        <span className="text-[0.625rem] font-semibold uppercase opacity-90">{config.sublabel}</span>
      </div>
    );
  }

  const { Icon } = config;
  return (
    <div className={`cert-logo-badge ${config.className}`} aria-hidden>
      <Icon size={26} />
    </div>
  );
}
