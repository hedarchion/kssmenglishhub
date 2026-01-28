import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CopyButton } from './CopyButton';
import { CopyAllButton } from './CopyAllButton';
import { 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  Drama,
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  GitCompare,
  Filter
} from 'lucide-react';
import { form1Standards } from '@/data/standardsData';

const skillIcons: Record<string, React.ReactNode> = {
  'Listening': <Headphones className="h-4 w-4" />,
  'Speaking': <Mic className="h-4 w-4" />,
  'Reading': <BookOpen className="h-4 w-4" />,
  'Writing': <PenTool className="h-4 w-4" />,
  'Literature in Action': <Drama className="h-4 w-4" />,
};

// Monochrome color tokens (no color coding)
const mono = { bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800', text: 'text-gray-800 dark:text-gray-200', light: 'bg-gray-100 dark:bg-gray-700/40' };

function PerformanceLevel({ level, descriptor, note }: { level: number; descriptor: string; note: string }) {
  const levelStyle = 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className={`border rounded-lg overflow-hidden ${levelStyle}`}>
      <div className="px-3 py-2.5 flex items-center justify-between text-left">
        <div className="flex items-center gap-2">
          <Badge className={`${levelStyle} border`}>Level {level}</Badge>
          <span className="text-sm font-medium truncate max-w-[180px] sm:max-w-md">
            {descriptor}
          </span>
        </div>
      </div>
      <div className="px-3 pb-3 border-t bg-white/50 dark:bg-black/20">
        <p className="text-xs mt-2 leading-relaxed">{descriptor}</p>
        <p className="text-xs mt-2 opacity-75 italic">{note}</p>
        <div className="mt-2 flex justify-end">
          <CopyButton text={`Level ${level}: ${descriptor}\n(${note})`} />
        </div>
      </div>
    </div>
  );
}

function ContentStandardCard({ 
  code, 
  description, 
  focus, 
  learningStandards,
  showLearning
}: { 
  code: string; 
  description: string; 
  focus: string; 
  learningStandards: { code: string; description: string }[];
  showLearning: boolean;
}) {
  const [expanded, setExpanded] = useState(true);
  const colors = mono;

  const allLearningText = learningStandards.map(ls => `${ls.code}: ${ls.description}`).join('\n');
  const fullText = `${code}: ${description}\nFocus: ${focus}${showLearning ? `\n\nLearning Standards:\n${allLearningText}` : ''}`;

  return (
    <div className={`border rounded-lg overflow-hidden ${colors.border}`}>
      <div className={`${colors.bg} px-3 py-3`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className={`font-mono ${colors.light} ${colors.text}`}>{code}</Badge>
              <span className="text-sm font-medium">{description}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{focus}</p>
          </div>
          <CopyAllButton text={fullText} label="Copy" />
        </div>
      </div>
      {showLearning && (
        <div className="p-3">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            Learning Standards ({learningStandards.length})
          </button>
          {expanded && (
            <div className="mt-2 space-y-1">
              {learningStandards.map((ls) => (
                <div key={ls.code} className="flex items-start gap-2 group p-2 rounded hover:bg-muted/50">
                  <Badge variant="outline" className="text-[10px] px-1.5 h-5 flex-shrink-0 font-mono">
                    {ls.code}
                  </Badge>
                  <span className="text-xs leading-relaxed flex-1">{ls.description}</span>
                  <CopyButton 
                    text={`${ls.code}: ${ls.description}`}
                    className="opacity-0 group-hover:opacity-100 h-5 w-5"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SkillView({ 
  skill, 
  showContent, 
  showLearning, 
  showPerformance 
}: { 
  skill: typeof form1Standards.skills[0];
  showContent: boolean;
  showLearning: boolean;
  showPerformance: boolean;
}) {
  const colors = mono;

  const allContentText = skill.contentStandards.map(cs => {
    const lsText = showLearning ? cs.learningStandards.map(ls => `  ${ls.code}: ${ls.description}`).join('\n') : '';
    return `${cs.code}: ${cs.description}\n  Focus: ${cs.focus}${lsText ? `\n\n  Learning Standards:\n${lsText}` : ''}`;
  }).join('\n\n');

  const allPerformanceText = skill.performanceStandards.map(ps => 
    `Level ${ps.level}: ${ps.descriptor}\n(${ps.note})`
  ).join('\n\n');

  const shouldShow = (showContent && skill.contentStandards.length > 0) || 
                     (showPerformance && skill.performanceStandards.length > 0);

  if (!shouldShow) return null;

  return (
    <Card className={`border ${colors.border}`}>
      <CardHeader className={`py-3 px-4 ${colors.bg}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className={colors.text}>{skillIcons[skill.skill]}</div>
            <CardTitle className="text-sm sm:text-base truncate">{skill.skill}</CardTitle>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            {showContent && <CopyAllButton text={allContentText} label="Copy Content" />}
            {showPerformance && <CopyAllButton text={allPerformanceText} label="Copy Performance" />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 space-y-4">
        {showContent && skill.contentStandards.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Layers className="h-4 w-4" />
              Content & Learning Standards
            </div>
            {skill.contentStandards.map((cs) => (
              <ContentStandardCard 
                key={cs.code}
                code={cs.code}
                description={cs.description}
                focus={cs.focus}
                learningStandards={cs.learningStandards}
                showLearning={showLearning}
              />
            ))}
          </div>
        )}

        {showPerformance && skill.performanceStandards.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Award className="h-4 w-4" />
              Performance Standards
            </div>
            {skill.performanceStandards.map((ps) => (
              <PerformanceLevel 
                key={ps.level}
                level={ps.level}
                descriptor={ps.descriptor}
                note={ps.note}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function StandardsView() {
  // Multiple selection states
  const [selectedForms, setSelectedForms] = useState<number[]>([1]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Listening', 'Speaking', 'Reading', 'Writing', 'Literature in Action']);
  const [showContent, setShowContent] = useState(true);
  const [showLearning, setShowLearning] = useState(true);
  const [showPerformance, setShowPerformance] = useState(true);
  const [compareMode, setCompareMode] = useState<'forms' | 'skills' | 'both'>('forms');

  const skills = form1Standards.skills;
  const forms = [1, 2, 3, 4, 5];

  const toggleForm = (form: number) => {
    setSelectedForms(prev => 
      prev.includes(form) 
        ? prev.filter(f => f !== form)
        : [...prev, form].sort()
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const selectAllSkills = () => {
    setSelectedSkills(skills.map(s => s.skill));
  };

  const clearAllSkills = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="space-y-5">
      {/* Filter Panel */}
      <Card className="border">
        <CardHeader className="py-4 px-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm">Filter & Compare Options</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-5">
          {/* Forms Selection */}
          <div>
            <div className="text-sm font-medium mb-3">Select Form(s)</div>
            <div className="grid grid-cols-5 gap-2">
              {forms.map((form) => (
                <button
                  key={form}
                  onClick={() => toggleForm(form)}
                  className={`
                    px-2 py-2.5 rounded-lg text-sm font-medium transition-all
                    ${selectedForms.includes(form)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                    }
                  `}
                >
                  {form}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">Select Skill(s)</div>
              <div className="flex gap-2">
                <button onClick={selectAllSkills} className="text-xs text-primary hover:underline">Select All</button>
                <span className="text-muted-foreground">|</span>
                <button onClick={clearAllSkills} className="text-xs text-primary hover:underline">Clear All</button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {skills.map((skill) => {
                const colors = mono;
                const isSelected = selectedSkills.includes(skill.skill);
                return (
                  <button
                    key={skill.skill}
                    onClick={() => toggleSkill(skill.skill)}
                    className={`
                      px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center sm:justify-start gap-2 border
                      ${isSelected
                        ? `${colors.bg} ${colors.border} ${colors.text}`
                        : 'bg-muted border-transparent hover:bg-muted/80'
                      }
                    `}
                  >
                    <span className={isSelected ? colors.text : 'text-muted-foreground'}>{skillIcons[skill.skill]}</span>
                    <span className="text-xs sm:text-sm">{skill.skill}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aspects Selection */}
          <div>
            <div className="text-sm font-medium mb-3">Show Aspects</div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox checked={showContent} onCheckedChange={(c) => setShowContent(c as boolean)} />
                <span className="text-sm">Content Standards</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox checked={showLearning} onCheckedChange={(c) => setShowLearning(c as boolean)} />
                <span className="text-sm">Learning Standards</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <Checkbox checked={showPerformance} onCheckedChange={(c) => setShowPerformance(c as boolean)} />
                <span className="text-sm">Performance Standards</span>
              </label>
            </div>
          </div>

          {/* Compare Mode */}
          <div>
            <div className="text-sm font-medium mb-3">Compare By</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'forms', label: 'Forms', icon: GitCompare },
                { value: 'skills', label: 'Skills', icon: Layers },
                { value: 'both', label: 'Both', icon: Filter },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setCompareMode(value as 'forms' | 'skills' | 'both')}
                  className={`
                    px-2 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5
                    ${compareMode === value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                    }
                  `}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      <ScrollArea className="h-[600px]">
        <div className="space-y-5">
          {/* Compare by Forms */}
          {(compareMode === 'forms' || compareMode === 'both') && selectedForms.length > 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <GitCompare className="h-4 w-4" />
                Comparing Forms: {selectedForms.join(', ')}
              </div>
              <div className={`grid gap-4 ${selectedForms.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : selectedForms.length === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'}`}>
                {selectedForms.map((form) => (
                  <Card key={form} className="border">
                    <CardHeader className="py-3 px-4 bg-muted/50">
                      <CardTitle className="text-sm">Form {form}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-3">
                      {selectedSkills.map((skillName) => {
                        const skill = skills.find(s => s.skill === skillName);
                        if (!skill) return null;
                        return (
                          <div key={skillName} className={`p-3 rounded border ${mono.border}`}>
                            <div className={`flex items-center gap-2 text-xs font-medium mb-1 ${mono.text}`}>
                              {skillIcons[skillName]}
                              {skillName}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {showContent && `${skill.contentStandards.length} Content Standards`}
                              {showContent && showPerformance && ' | '}
                              {showPerformance && `${skill.performanceStandards.length} Performance Levels`}
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Compare by Skills */}
          {(compareMode === 'skills' || compareMode === 'both' || (compareMode === 'forms' && selectedForms.length === 1)) && (
            <div className="space-y-5">
              {compareMode === 'skills' && selectedSkills.length > 1 && (
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Layers className="h-4 w-4" />
                  Comparing Skills: {selectedSkills.join(', ')}
                </div>
              )}
              
              {selectedForms.map((form) => (
                <div key={form} className="space-y-4">
                  {selectedForms.length > 1 && (
                    <Badge variant="outline" className="text-sm">Form {form}</Badge>
                  )}
                  <div className={`grid gap-4 ${selectedSkills.length === 1 ? 'grid-cols-1' : selectedSkills.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'}`}>
                    {selectedSkills.map((skillName) => {
                      const skill = skills.find(s => s.skill === skillName);
                      if (!skill) return null;
                      return (
                        <SkillView 
                          key={`${form}-${skillName}`}
                          skill={skill}
                          showContent={showContent}
                          showLearning={showLearning}
                          showPerformance={showPerformance}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {selectedForms.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="py-8 text-center">
                <Filter className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Select at least one form to view standards</p>
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>

      {/* Standards Structure Info */}
      <Card className="border bg-muted/30">
        <CardHeader className="py-4 px-4">
          <CardTitle className="text-sm">Standards Structure</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="p-4 bg-background rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gray-500">1</Badge>
                <span className="font-semibold">Content Standards</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Broad statements on what pupils should know, understand and be able to do by the end of Form 5.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gray-500">2</Badge>
                <span className="font-semibold">Learning Standards</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Concise educational objectives that pupils are expected to master at each Form.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gray-500">3</Badge>
                <span className="font-semibold">Performance Standards</span>
              </div>
              <p className="text-xs text-muted-foreground">
                6 levels (1-6) arranged in ascending manner to differentiate pupils' achievement.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
