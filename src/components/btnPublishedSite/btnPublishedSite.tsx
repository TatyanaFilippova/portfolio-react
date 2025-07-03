import "./style.css";

interface ButtonProps {
  link?: string;
}

const BtnPublishedSite = ({ link }: ButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      Published site
    </a>
  );
};

export default BtnPublishedSite;
