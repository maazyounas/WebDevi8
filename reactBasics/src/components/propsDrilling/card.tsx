
type CardProps = {
  title: string;
  paragraph: string;
};

const card = (props: CardProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <button>Click me</button>
    </div>
  )
}

export default card
