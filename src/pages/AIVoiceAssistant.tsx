import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Save, Trash2, Play, Pause, Download, Plus } from 'lucide-react';

interface Note {
  id: string;
  timestamp: string;
  content: string;
  audioUrl?: string;
}

function AIVoiceAssistant() {
  const [isRecording, setIsRecording] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Load saved notes from localStorage
    const savedNotes = localStorage.getItem('aiAssistantNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        const newNote: Note = {
          id: Date.now().toString(),
          timestamp: new Date().toLocaleString(),
          content: currentNote,
          audioUrl
        };

        setNotes(prev => {
          const updatedNotes = [newNote, ...prev];
          localStorage.setItem('aiAssistantNotes', JSON.stringify(updatedNotes));
          return updatedNotes;
        });
        setCurrentNote('');
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const addNote = () => {
    if (currentNote.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        content: currentNote
      };

      setNotes(prev => {
        const updatedNotes = [newNote, ...prev];
        localStorage.setItem('aiAssistantNotes', JSON.stringify(updatedNotes));
        return updatedNotes;
      });
      setCurrentNote('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(prev => {
      const updatedNotes = prev.filter(note => note.id !== id);
      localStorage.setItem('aiAssistantNotes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const downloadNotes = () => {
    const notesText = notes
      .map(note => `${note.timestamp}\n${note.content}\n\n`)
      .join('---\n\n');
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-assistant-notes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-center gradient-text"
          >
            AI Voice Assistant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
          >
            Speak with our AI assistant and save your consultation notes
          </motion.p>
        </div>
      </section>

      {/* Voice Assistant Interface */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Assistant Widget */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">AI Assistant</h2>
              <div className="flex justify-center">
                <iframe
                  id="audio_iframe"
                  src="https://widget.synthflow.ai/widget/v2/1732587754726x779940546569038700/1732587754611x979527526547760100"
                  allow="microphone"
                  width="400"
                  height="600"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)'
                  }}
                />
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Consultation Notes</h2>
                <textarea
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder="Add notes for this consultation..."
                  className="w-full h-32 bg-dark-700 text-gray-300 border border-glass-light rounded-lg p-4 focus:outline-none focus:border-neon-blue transition-colors duration-200"
                />
                <div className="flex justify-between mt-4">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        isRecording
                          ? 'bg-red-500/20 text-red-500'
                          : 'bg-neon-blue/20 text-neon-blue'
                      } hover:bg-opacity-30 transition-all duration-200`}
                    >
                      {isRecording ? (
                        <>
                          <MicOff className="h-5 w-5" />
                          <span>Stop Recording</span>
                        </>
                      ) : (
                        <>
                          <Mic className="h-5 w-5" />
                          <span>Start Recording</span>
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={addNote}
                      disabled={!currentNote.trim()}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neon-blue/20 text-neon-blue hover:bg-opacity-30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Note</span>
                    </motion.button>
                  </div>
                  <button
                    onClick={downloadNotes}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-glass-light text-neon-blue hover:bg-glass-dark transition-all duration-200"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Notes</span>
                  </button>
                </div>
              </div>

              {/* Saved Notes */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Saved Notes</h3>
                {notes.map((note) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-gray-400 text-sm">{note.timestamp}</span>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-gray-300 mb-4 whitespace-pre-wrap">{note.content}</p>
                    {note.audioUrl && (
                      <audio
                        controls
                        className="w-full"
                        src={note.audioUrl}
                      >
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </motion.div>
                ))}
                {notes.length === 0 && (
                  <p className="text-center text-gray-400">No notes yet. Start a consultation to create notes.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIVoiceAssistant;