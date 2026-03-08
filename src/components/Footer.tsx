export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-white">
      <div className="max-w-6xl mx-auto p-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Ecoyaan. All rights reserved.</p>

        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
