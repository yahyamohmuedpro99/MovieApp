export default function Loading() {
  return (
    <>
      <img
        src='https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif'
        alt="lazy one"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%', 
          transform: 'translate(-50%, -50%)', // Centering trick
        }}
      />
    </>
  );
}
