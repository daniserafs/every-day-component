import "./styles.css";

export type AvatarProps = {
  imageURL: string;
};

const DEFAULT_IMG = "https://www.w3schools.com/howto/img_avatar2.png";

const Avatar = ({ imageURL }: AvatarProps) => {
  return imageURL.length === 0 ? (
    <img src={DEFAULT_IMG} className="image" />
  ) : (
    <img src={imageURL} className="image" />
  );
};

export default Avatar;
