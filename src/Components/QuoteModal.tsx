"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../common/dialog";
import { Button } from "../common/button";
import ContactForm from "./Quote";

export default function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-controls="">Request a Quote</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg sm:w-full" id="contact-dialog-content">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill out the form below to get a custom quote for your event.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
