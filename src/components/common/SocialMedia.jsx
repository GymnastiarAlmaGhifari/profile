import { socialMedia } from "../../constants";
import BoxCanvas from "../canvas/Box";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-8 gap-2">
        {socialMedia.map((social) => (
          <div key={social.id} className="w-20 h-24 md:w-24 md:h-28 cursor-pointer">
            <BoxCanvas icon={social.icon} link={social.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
