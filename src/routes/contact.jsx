import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Nguyễn",
    last: "Hưng",
    avatar: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/353451814_229471863186019_7378762039669664865_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGn6qWIHD4_2fGrxiNXViFKcw7AFfFo4LZzDsAV8WjgtnJBAJYVHro_WGz9XcQqPJLp-kpubFDFYKP00Ghr5HaE&_nc_ohc=RtmIYA_oqOIAX_eZIjo&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAOrcO7xQkQxVpkxD3PDYJ67fHIaNvmP_JRucHaq6t8iA&oe=65EFB550",
    facebook: "hungvidai.20",
    notes: "Hưng đẹp trai",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.facebook && (
          <p>
            <a
              target="_blank"
              href={`https://facebook.com/${contact.facebook}`}
            >
              {contact.facebook}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}