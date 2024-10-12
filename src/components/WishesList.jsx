import Card from '../components/Card';

export default function WishesList({ posts }) {
  return (
    <>
      {posts.length === 0 && (
        <strong className="text-3xl dark:text-gray-200 text-dark block mb-8">
          제일 먼저 소원을 작성해 보세요!
        </strong>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map(post => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}
