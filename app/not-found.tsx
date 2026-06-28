import { Container, Section } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <p className="font-display text-6xl font-bold text-brand-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-brand-900">Page not found</h1>
        <p className="mt-2 text-muted">The page you're looking for doesn't exist.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/">Go home</Button>
          <Button href="/book" variant="outline">Book a service</Button>
        </div>
      </Container>
    </Section>
  );
}
