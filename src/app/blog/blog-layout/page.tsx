import NavbarCustom from '@/components/NavbarCustom';
import FooterCustom from '@/components/FooterCustom';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">My First Post</h1>
      <p className="text-sm text-muted-foreground mb-8">July 1, 2023</p>
      <Image
        src="/images/my-first-post.jpg"
        alt="Description of the image"
        width={800}
        height={600}
        className="rounded-md mb-8"
      />
      <p className="text-lg">
        This is the content of my first post. Here is an image:
      </p>
      <p className="text-lg">
        And here is some more content...
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default BlogPost;
