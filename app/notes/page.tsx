import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

const Notes = async () => {
  const {notes} = await getNotes();

  return (<section>
      <h1>Notes List</h1>
      {notes?.length > 0 && <NoteList notes={notes} />}
    </section>);
}

export default Notes;
