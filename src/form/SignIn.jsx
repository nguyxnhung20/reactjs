import { useRef } from 'react';
function SingIn() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const contentRef = useRef('xinchaovietnam');

  let classUser = 'form-control';

  const submitSignIn = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    // nameRef.current.focus();
    if (name.length <= 0) {
      nameRef.current.className = 'form-control is-invalid';
    } else {
      nameRef.current.className = 'form-control';
    }

    if (email.length <= 0) {
      emailRef.current.className = 'form-control is-invalid';
    } else {
      emailRef.current.className = 'form-control';
    }
  };
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          User Name
        </label>
        <input
          type="user"
          className={classUser}
          id="exampleFormControlInput1"
          placeholder="username..."
          ref={nameRef}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={contentRef}
        ></textarea>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => submitSignIn()}
        >
          Submit form
        </button>
      </div>
    </div>
  );
}

export default SingIn;
