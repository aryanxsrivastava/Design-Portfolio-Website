
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('message', values.message);
      formData.append('_captcha', 'false');
      formData.append('_honey', ''); // Honeypot

      const response = await fetch('https://formsubmit.co/aryan.srivastava101203@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: '[ MESSAGE SENT ]',
          description: "Thanks for the transmission. I'll reply soon.",
          variant: 'default',
          className: 'bg-primary text-primary-foreground border-2 border-primary-foreground font-bold',
        });
        form.reset();
      } else {
        toast({
          title: '[ ERROR ]',
          description: 'Something went wrong. Try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: '[ ERROR ]',
        description: 'Network error. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-24 sm:py-32 border-t-2 border-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="grid md:grid-cols-5 gap-8 items-start px-4">
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">[ Contact ]</h2>
          <p className="text-muted-foreground">Get in touch. Send a transmission.</p>
        </motion.div>
        <motion.div className="md:col-span-3" variants={itemVariants}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">[ NAME ]</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent border-2 border-foreground rounded-none focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">[ EMAIL ]</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent border-2 border-foreground rounded-none focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-lg">[ MESSAGE ]</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[150px] bg-transparent border-2 border-foreground rounded-none focus:bg-primary focus:text-primary-foreground focus:placeholder:text-primary-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-none border-2 border-primary-foreground hover:bg-foreground hover:text-background font-bold text-lg py-6"
              >
                SEND TRANSMISSION
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
}
