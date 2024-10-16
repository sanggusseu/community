import InputField from './form/InputField';
import TextArea from './form/TextArea';
import Form from './form/Form';

const WishForm = ({ handleSubmit, initialValue = {}, submitBtnText }) => {
  return (
    <div className=" dark:text-white text-gray-900">
      <div className="flex items-center my-8">
        <h1 className="text-3xl font-bold">소원 작성하기</h1>
      </div>
      <Form
        handleSubmit={handleSubmit}
        initialValue={initialValue}
        submitBtnText={submitBtnText}
      >
        <InputField id="title" label="제목" name="title" />
        <InputField id="link" label="구매처" type="url" name="link" />
        <InputField id="price" label="가격" type="number" name="price" />
        <TextArea id="memo" label="메모" name="memo" />
      </Form>
    </div>
  );
};

export default WishForm;
