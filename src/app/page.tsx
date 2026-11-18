import Link from "next/link";



export default function HomePage() {
const mockUrls = ["https://jqz4kx2bpy.ufs.sh/f/eI9BYIZ5vupXRXWbp8wVmF29SgWEloOVxradCkNIGMjYstU5", "https://jqz4kx2bpy.ufs.sh/f/eI9BYIZ5vupXZuKYPoFhOaJSBgUqTuAGPQ0icelfLKvk3jr2", "https://jqz4kx2bpy.ufs.sh/f/eI9BYIZ5vupXy4QBukT5tlTyM3z02Y1bGVgIvCf9q7An6ROQ"]

  const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
  return ( 
    <main className="x min-h-flescreen flex-col items-center justify-center text-black align-text-top]">
              <p>what-</p>
            <div className="tems-center flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
    <Link href="/layer02">click</Link>
    </main>
    
  );
}

