import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { quizLevels, getTotalQuestions } from '@/data/quizData';
import { 
  Trophy, 
  Star, 
  Lock, 
  Unlock, 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Award,
  Medal,
  Crown,
  Target,
  Brain,
  BookOpen,
  GraduationCap
} from 'lucide-react';

interface QuizProgress {
  completedLevels: number[];
  currentLevel: number;
  scores: Record<number, number>;
}

interface CertificateData {
  name: string;
  job: string;
  date: string;
}

const LEVEL_ICONS = [Target, Brain, BookOpen, GraduationCap, Trophy, Star, Medal, Award, Crown, Trophy];
const LEVEL_COLORS = [
  'from-green-400 to-green-600',
  'from-blue-400 to-blue-600',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-pink-600',
  'from-yellow-400 to-yellow-600',
  'from-orange-400 to-orange-600',
  'from-red-400 to-red-600',
  'from-indigo-400 to-indigo-600',
  'from-cyan-400 to-cyan-600',
  'from-amber-400 to-amber-600'
];

export function QuizGame() {
  const [progress, setProgress] = useState<QuizProgress>({
    completedLevels: [],
    currentLevel: 1,
    scores: {}
  });
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'levelComplete' | 'gameComplete'>('menu');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState<CertificateData>({ name: '', job: '', date: '' });

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kssmQuizProgress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('kssmQuizProgress', JSON.stringify(progress));
  }, [progress]);

  const currentLevel = quizLevels[progress.currentLevel - 1];
  const currentQuestion = currentLevel?.questions[currentQuestionIndex];
  const isLevelUnlocked = (level: number) => {
    if (level === 1) return true;
    return progress.completedLevels.includes(level - 1);
  };

  const startLevel = (level: number) => {
    setProgress(prev => ({ ...prev, currentLevel: level }));
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameState('playing');
  };

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctAnswer) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Level complete
      const passed = correctCount + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0) >= currentLevel.passScore;
      if (passed) {
        setProgress(prev => ({
          ...prev,
          completedLevels: [...new Set([...prev.completedLevels, currentLevel.level])],
          scores: { ...prev.scores, [currentLevel.level]: correctCount + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0) }
        }));
        if (currentLevel.level === 10) {
          setGameState('gameComplete');
        } else {
          setGameState('levelComplete');
        }
      } else {
        setGameState('levelComplete');
      }
    }
  };

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgress({
        completedLevels: [],
        currentLevel: 1,
        scores: {}
      });
      localStorage.removeItem('kssmQuizProgress');
    }
  };

  const generateCertificate = () => {
    const date = new Date().toLocaleDateString('en-MY', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
    setCertificateData(prev => ({ ...prev, date }));
    setShowCertificate(true);
  };

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#1e3a5f');
    gradient.addColorStop(1, '#0d2137');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 760, 560);
    ctx.strokeStyle = '#f4d03f';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 740, 540);

    // Title
    ctx.fillStyle = '#f4d03f';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('KSSM ENGLISH CURRICULUM HUB', 400, 80);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px serif';
    ctx.fillText('Certificate of Achievement', 400, 130);

    // Decorative line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(600, 150);
    ctx.stroke();

    // Content
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px sans-serif';
    ctx.fillText('This is to certify that', 400, 190);

    // Name
    ctx.fillStyle = '#f4d03f';
    ctx.font = 'bold 42px serif';
    ctx.fillText(certificateData.name || '_________________', 400, 250);

    // Job
    if (certificateData.job) {
      ctx.fillStyle = '#cccccc';
      ctx.font = '18px sans-serif';
      ctx.fillText(certificateData.job, 400, 280);
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = '18px sans-serif';
    ctx.fillText('has successfully completed all 10 levels of the', 400, 320);
    ctx.fillText('KSSM English Curriculum Mastery Challenge', 400, 345);
    ctx.fillText('demonstrating comprehensive knowledge of:', 400, 370);

    // Skills list
    ctx.fillStyle = '#d4af37';
    ctx.font = '16px sans-serif';
    const skills = [
      'Content Standards, Learning Standards & Performance Standards',
      'Listening, Speaking, Reading & Writing Skills',
      'Literature in Action & 21st Century Skills',
      'Cross-Curricular Elements & HOTS'
    ];
    skills.forEach((skill, i) => {
      ctx.fillText(`• ${skill}`, 400, 405 + i * 22);
    });

    // Date
    ctx.fillStyle = '#cccccc';
    ctx.font = '16px sans-serif';
    ctx.fillText(`Date: ${certificateData.date}`, 400, 510);

    // Signature line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 540);
    ctx.lineTo(500, 540);
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    ctx.fillText('KSSM English Hub', 400, 560);

    // Download
    const link = document.createElement('a');
    link.download = `KSSM-Certificate-${certificateData.name.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  // Menu Screen
  if (gameState === 'menu') {
    return (
      <div className="space-y-6">
        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              KSSM Curriculum Mastery Challenge
            </CardTitle>
            <CardDescription>
              Test your knowledge across 10 levels. Progress is saved locally.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {quizLevels.map((level, index) => {
                const Icon = LEVEL_ICONS[index];
                const isUnlocked = isLevelUnlocked(level.level);
                const isCompleted = progress.completedLevels.includes(level.level);
                const score = progress.scores[level.level];

                return (
                  <button
                    key={level.level}
                    onClick={() => isUnlocked && startLevel(level.level)}
                    disabled={!isUnlocked}
                    className={`
                      relative p-4 rounded-xl border-2 transition-all duration-300 text-left
                      ${isCompleted 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : isUnlocked 
                          ? 'border-primary hover:border-primary/80 hover:bg-primary/5 cursor-pointer' 
                          : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                      }
                    `}
                  >
                    <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500' : isUnlocked ? 'bg-primary' : 'bg-gray-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : isUnlocked ? (
                        <Unlock className="h-3 w-3 text-white" />
                      ) : (
                        <Lock className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${LEVEL_COLORS[index]} flex items-center justify-center mb-2`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">Level {level.level}</div>
                    <div className="text-sm font-semibold truncate">{level.title}</div>
                    {isCompleted && score !== undefined && (
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {score}/{level.questions.length}
                      </Badge>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Progress: {progress.completedLevels.length}/10 levels completed
              </div>
              <Button variant="outline" size="sm" onClick={resetProgress} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset Progress
              </Button>
            </div>

            <Progress 
              value={(progress.completedLevels.length / 10) * 100} 
              className="mt-2"
            />

            {progress.completedLevels.length === 10 && (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 rounded-lg text-center">
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                  Congratulations! You've completed all levels!
                </p>
                <Button onClick={generateCertificate} className="mt-2 gap-2">
                  <Award className="h-4 w-4" />
                  Get Your Certificate
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Certificate Dialog */}
        <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Generate Your Certificate
              </DialogTitle>
              <DialogDescription>
                Enter your details to generate your achievement certificate.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  value={certificateData.name}
                  onChange={e => setCertificateData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="job">Job/Position (Optional)</Label>
                <Input 
                  id="job" 
                  value={certificateData.job}
                  onChange={e => setCertificateData(prev => ({ ...prev, job: e.target.value }))}
                  placeholder="e.g., English Teacher, Student"
                />
              </div>
              <Button 
                onClick={downloadCertificate} 
                disabled={!certificateData.name}
                className="w-full gap-2"
              >
                <Award className="h-4 w-4" />
                Download Certificate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Playing Screen
  if (gameState === 'playing' && currentQuestion) {
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Level {currentLevel.level}: {currentLevel.title}</CardTitle>
              <CardDescription>{currentLevel.description}</CardDescription>
            </div>
            <Badge variant="outline">
              Question {currentQuestionIndex + 1}/{currentLevel.questions.length}
            </Badge>
          </div>
          <Progress 
            value={(currentQuestionIndex / currentLevel.questions.length) * 100} 
            className="mt-2"
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg font-medium">{currentQuestion.question}</div>
          
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`
                  w-full p-4 rounded-lg border-2 text-left transition-all
                  ${showResult
                    ? index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : selectedAnswer === index
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-200 opacity-50'
                    : selectedAnswer === index
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium
                    ${showResult
                      ? index === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-500 text-white'
                        : selectedAnswer === index
                          ? 'border-red-500 bg-red-500 text-white'
                          : 'border-gray-300'
                      : selectedAnswer === index
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300'
                    }
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className={`
              p-4 rounded-lg mt-4
              ${selectedAnswer === currentQuestion.correctAnswer 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200'
              }
            `}>
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                <span className={`
                  font-semibold
                  ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'}
                `}>
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentQuestion.explanation}
              </p>
              <Button onClick={handleNextQuestion} className="mt-3 gap-2">
                {currentQuestionIndex < currentLevel.questions.length - 1 ? (
                  <>
                    Next Question <ChevronRight className="h-4 w-4" />
                  </>
                ) : (
                  'Finish Level'
                )}
              </Button>
            </div>
          )}

          <div className="text-sm text-muted-foreground text-center">
            Score: {correctCount + (showResult && selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)} correct
            (Need {currentLevel.passScore} to pass)
          </div>
        </CardContent>
      </Card>
    );
  }

  // Level Complete Screen
  if (gameState === 'levelComplete') {
    const passed = (progress.scores[currentLevel.level] || 0) >= currentLevel.passScore;
    
    return (
      <Card className="border-2 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {passed ? 'Level Complete!' : 'Level Failed'}
          </CardTitle>
          <CardDescription>
            {passed 
              ? `Congratulations! You passed Level ${currentLevel.level}` 
              : `You didn't reach the passing score. Try again!`
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className={`
            w-20 h-20 rounded-full mx-auto flex items-center justify-center
            ${passed ? 'bg-green-100' : 'bg-red-100'}
          `}>
            {passed ? (
              <Trophy className="h-10 w-10 text-green-500" />
            ) : (
              <RotateCcw className="h-10 w-10 text-red-500" />
            )}
          </div>
          
          <div className="text-lg">
            You scored: <span className="font-bold">{progress.scores[currentLevel.level] || 0}</span> / {currentLevel.questions.length}
          </div>
          <div className="text-sm text-muted-foreground">
            Passing score: {currentLevel.passScore}
          </div>

          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => setGameState('menu')}>
              Back to Menu
            </Button>
            {!passed && (
              <Button onClick={() => startLevel(currentLevel.level)}>
                Try Again
              </Button>
            )}
            {passed && currentLevel.level < 10 && (
              <Button onClick={() => startLevel(currentLevel.level + 1)}>
                Next Level
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Game Complete Screen
  if (gameState === 'gameComplete') {
    return (
      <Card className="border-2 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10">
        <CardHeader className="text-center">
          <div className="w-20 h-20 rounded-full bg-yellow-100 mx-auto flex items-center justify-center mb-4">
            <Crown className="h-10 w-10 text-yellow-500" />
          </div>
          <CardTitle className="text-3xl">Congratulations!</CardTitle>
          <CardDescription className="text-lg">
            You have completed all 10 levels of the KSSM Curriculum Mastery Challenge!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-sm text-muted-foreground mb-2">Total Score</div>
            <div className="text-4xl font-bold text-yellow-600">
              {Object.values(progress.scores).reduce((a, b) => a + b, 0)} / {getTotalQuestions()}
            </div>
          </div>

          <p className="text-muted-foreground">
            You have demonstrated mastery of the KSSM English Curriculum including:
          </p>
          <ul className="text-sm text-left max-w-md mx-auto space-y-1">
            <li>✓ Content Standards, Learning Standards & Performance Standards</li>
            <li>✓ Listening, Speaking, Reading & Writing Skills</li>
            <li>✓ Literature in Action & 21st Century Skills</li>
            <li>✓ Cross-Curricular Elements & HOTS</li>
          </ul>

          <div className="flex gap-3 justify-center pt-4">
            <Button variant="outline" onClick={() => setGameState('menu')}>
              Back to Menu
            </Button>
            <Button onClick={generateCertificate} className="gap-2 bg-yellow-500 hover:bg-yellow-600">
              <Award className="h-4 w-4" />
              Get Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}
