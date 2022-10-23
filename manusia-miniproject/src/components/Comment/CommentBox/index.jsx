const CommentBox = ({ nama, date, text, img, profile_pic }) => {
  return (
    <div className="flex gap-3 border-t-2 py-2">
      <img src={profile_pic} className="rounded-full w-32 h-32 border" />
      <div className="space-y-4 mt-2 w-full">
        <div className="flex justify-between mx-1 text-[#0B3B36] font-bold text-[18px] leading-7">
          <p>{nama}</p>
          <p>{date}</p>
        </div>
        <img src={img} className="max-h-52" />
        <p className="text-justify text-[20px] leading-7 font-light">{text}</p>
      </div>
    </div>
  );
};

export default CommentBox;
