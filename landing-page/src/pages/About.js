import HeadingWithParagraph from "../components/HeadingWithParagraph/HeadingWithParagraph";

export default function About() {
  return (
    <div className="max-w-[1100px] lg:mx-auto mx-10 mt-[55px] h-[60vh]">
      <HeadingWithParagraph headingLevel='h1' title='About' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' p2='Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
    </div>

  )
}
