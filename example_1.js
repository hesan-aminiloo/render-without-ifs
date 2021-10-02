/**
 * Text component renders different types of text
 *
 * @param {string} type h1|h2|h3|body
 */
const Text = ({ type, children }) => {
  // First we define all different types using an object literal
  const types = {
    // each key represents a type
    h1: () => <h1 className="title fs-1">{children}</h1>,
    h2: () => <h2 className="title fs-2">{children}</h2>,
    h3: () => <h3 className="title fs-3">{children}</h3>,
    body: () => <p className="text-muted">{children}</p>,
  }

  return types[type.toLowerCase() || 'body']();
}


const Homescreen = () => {
  return (
    <>
      <Text type="h1">Homescreen</Text>
      <Text type="H3">
        Welcome to homescreen
      </Text>
      <Text tyoe="body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
    </>
  );
}