import { Link } from "react-router-dom";

import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import { Button } from "../components/ui/button";
import { useCmsContent } from "../context/CmsContentContext";

export default function RetreatsPage() {
  const { siteAssets } = useCmsContent();

  return (
    <div className="py-8">
      <section className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8e5a3a] dark:text-[#d3a57c]">
          Retreats
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Yoga & Meditation Retreats
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Restore your energy with Goa retreat formats designed around breath,
          meditation, mindful movement, and a quieter daily rhythm near Agonda
          Beach.
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          This retreat is designed to deepen practice while building a more
          comprehensive understanding of yoga philosophy and day-to-day yogic
          living, without needing to commit to a full teacher training first.
        </p>
        <img
          src={siteAssets.goaHero}
          alt="Goa yoga retreat"
          className="mt-6 h-72 w-full rounded-2xl object-cover"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-4 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Retreat Focus</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Each day includes two yoga practice sessions plus one guided
              meditation or sound-healing session.
            </p>
          </article>
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-4 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Garden-facing eco-friendly bungalow accommodation in Agonda, just
              a short walk from the Arabian Sea.
            </p>
          </article>
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-4 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Who It Suits</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Travelers, practitioners, and future trainees who want a shorter
              immersion centered on holistic practice, food, rest, and guided
              reflection.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-2xl font-semibold">What The Retreat Emphasizes</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                The retreat centers the experience on holistic yoga practice,
                yoga philosophy, and a calm beachside environment. It includes
                two yoga sessions daily, a guided meditation or sound-healing
                session, and a quieter evening rhythm with silence beginning
                after dinner.
              </p>
              <p>
                It also includes one Ayurvedic massage for retreats of at least
                three days, positioning the program as both restorative and
                practice-focused rather than purely touristic.
              </p>
              <p>
                For retreat guests, that means the experience is more than a
                beach stay with a yoga class attached. It is framed as a guided
                immersion into practice, reflection, nourishment, and a more
                mindful daily rhythm.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-2xl font-semibold">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                08:00-09:30 holistic yoga practice
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                10:30-13:00 free time or Ayurvedic massage appointment
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                16:30-18:00 holistic yoga practice
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                18:30-19:30 sound healing or meditation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#9a6a49]" />
                Silence begins at 20:00 and continues until breakfast the next
                morning
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-5 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Food</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Three vegetarian meals are included daily, with buffet-style
              breakfasts, traditional Indian lunch and dinner dishes, plus tea,
              juice, and unlimited filtered water.
            </p>
          </article>
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-5 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Accommodation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The retreat page specifies garden-facing AC-superior wooden
              bungalows with hot water, Wi-Fi, attached toilet and shower, and
              eco-friendly construction.
            </p>
          </article>
          <article className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] p-5 dark:border-[#5f4938] dark:bg-[#21180f]">
            <h2 className="text-lg font-semibold">Included Extra</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              One Ayurvedic massage is included for retreats of three days or
              longer, adding a restorative element to the overall stay.
            </p>
          </article>
        </div>

        <section className="mt-8 rounded-2xl border border-[#d8c6ae] bg-[#fffaf3] p-6 dark:border-[#5f4938] dark:bg-[#21180f]">
          <h2 className="text-2xl font-semibold">Sample Menu</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold">Breakfast</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fruit, muesli, yoghurt, porridge, traditional Indian paratha,
                toast, butter, jam, tea, coffee, and juice.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">Lunch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Traditional Indian dishes with salad, soups, vegetables, rice,
                chapati, dhal, and lentils.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">Dinner</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Indian dhal, aloo gobi, fresh vegetables, salads, spinach,
                palak paneer, mixed vegetables, and similar rotating dishes.
              </p>
            </article>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Masala chai, green tea, herbal tea, fresh juice, and unlimited
            filtered water are also available each day.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Mindfullness",
              "Body Balance",
              "Meditation Yoga",
              "Free Style Yoga",
              "Fitness Yoga",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border border-[#d8c6ae] bg-[#fffaf3] px-4 py-5 text-center text-sm font-medium text-[#5a3c26] dark:border-[#5f4938] dark:bg-[#21180f] dark:text-[#e9d8c4]"
              >
                {item}
              </article>
            ))}
          </div>
        </section>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/schedule">
            <Button variant="outline">Retreat Dates</Button>
          </Link>
          <Link to="/enquiry">
            <Button className="bg-[#8e5a3a] text-white hover:bg-[#754529] dark:bg-[#b17752] dark:hover:bg-[#9a6545]">
              Reserve Your Spot
            </Button>
          </Link>
        </div>
      </section>
      <div className="bg-[#fbf8f1] text-[#2f2920] dark:bg-[#17120d] dark:text-[#f2e8d6]">
        <Highlights />
      </div>
      <Testimonials />
    </div>
  );
}
