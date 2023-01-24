import "./styles.css";

export type myOwnCardProps = {
  imageURL?: string;
  title?: string;
  content?: React.ReactNode;
};

export function MyOwnCard({ imageURL, title, content }: myOwnCardProps) {
  return (
    <div className="myOwnCard">
      <img className="myOwnCard-image" src={imageURL} alt={title} />
      <div className="myOwnCard-actions">
        <div className="myOwnCard-title">{title}</div>
        <div className="myOwnCard-content">{content}</div>
      </div>
    </div>
  );
};

