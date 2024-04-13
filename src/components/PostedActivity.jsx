import "./PostedActivity.css"
function PostedActivity(){
return(
  <section className="activity_post">
    <img className="post_img" src="journal1.png"/>
    <div className="post_info">
      <div className="top_line">
        <p className="title">Toddler Room</p>
        <p className="date">Date</p>
      </div>
      <p className="title">ELECT Aspect:</p>
      <p className="data">Here's the ELECT Aspect given</p>
      <p className="title">Description:</p>
      <p className="data">Here's the description given</p>
      <p className="title">Participants:</p>
      <div className="participant_list">
        <img src="child1.png"/>
        <img src="child2.png"/>
      </div>
    </div>
  </section>
);
}

export default PostedActivity;