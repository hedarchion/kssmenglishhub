import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CopyButton } from './CopyButton';
import { CopyAllButton } from './CopyAllButton';
import { 
  Headphones, 
  Mic, 
  BookOpen, 
  PenTool, 
  Drama, 
  Languages,
  Library,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { FormData } from '@/data/curriculumData';
import { getAllGrammarText, getAllVocabularyText, getAllTextTypesText, getAllStandardsText } from '@/data/curriculumData';

interface SkillTabsProps {
  formData: FormData;
}

// Pastel color coding for skills
const skillColors: Record<string, { bg: string; border: string; icon: string; header: string }> = {
  'Listening': { 
    bg: 'bg-yellow-50 dark:bg-yellow-950/20', 
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600',
    header: 'bg-yellow-100/50 dark:bg-yellow-900/20'
  },
  'Speaking': { 
    bg: 'bg-red-50 dark:bg-red-950/20', 
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600',
    header: 'bg-red-100/50 dark:bg-red-900/20'
  },
  'Reading': { 
    bg: 'bg-green-50 dark:bg-green-950/20', 
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600',
    header: 'bg-green-100/50 dark:bg-green-900/20'
  },
  'Writing': { 
    bg: 'bg-blue-50 dark:bg-blue-950/20', 
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600',
    header: 'bg-blue-100/50 dark:bg-blue-900/20'
  },
  'Literature in Action': { 
    bg: 'bg-purple-50 dark:bg-purple-950/20', 
    border: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600',
    header: 'bg-purple-100/50 dark:bg-purple-900/20'
  },
};

const skillIcons: Record<string, React.ReactNode> = {
  'Listening': <Headphones className="h-4 w-4" />,
  'Speaking': <Mic className="h-4 w-4" />,
  'Reading': <BookOpen className="h-4 w-4" />,
  'Writing': <PenTool className="h-4 w-4" />,
  'Literature in Action': <Drama className="h-4 w-4" />,
};

function LearningStandardsList({ standards, skillName }: { standards: { code: string; description: string }[]; skillName: string }) {
  const [expanded, setExpanded] = useState(true);
  const colors = skillColors[skillName] || skillColors['Listening'];

  return (
    <div className={`mt-2 border rounded-lg ${colors.border} overflow-hidden`}>
      <button 
        onClick={() => setExpanded(!expanded)}
        className={`w-full px-3 py-2 flex items-center justify-between text-left ${colors.header}`}
      >
        <span className="text-sm font-medium">Learning Standards ({standards.length})</span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {expanded && (
        <div className={`p-2 space-y-1 ${colors.bg}`}>
          {standards.map((standard, index) => (
            <div key={index} className="flex items-start gap-2 group p-1.5 rounded hover:bg-white/50 dark:hover:bg-black/20">
              <Badge variant="outline" className="text-[10px] px-1 h-4 flex-shrink-0 font-mono">
                {standard.code}
              </Badge>
              <span className="text-xs leading-relaxed flex-1">{standard.description}</span>
              <CopyButton 
                text={`${standard.code}: ${standard.description}`}
                className="opacity-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SkillTabs({ formData }: SkillTabsProps) {
  const [activeTab, setActiveTab] = useState('listening');

  const renderStandards = (skillName: string) => {
    const skill = formData.skills.find(s => s.skill === skillName);
    if (!skill) return null;

    const colors = skillColors[skillName] || skillColors['Listening'];

    return (
      <div className="space-y-3">
        {skill.standards.map((standard, index) => (
          <div key={index} className={`group p-3 rounded-lg border ${colors.border} ${colors.bg}`}>
            <div className="flex items-start gap-2">
              <Badge className={`text-xs px-1.5 h-5 flex-shrink-0 font-mono ${colors.header} ${colors.icon}`}>
                {standard.code}
              </Badge>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm leading-relaxed">{standard.description}</span>
                  <CopyButton 
                    text={`${standard.code}: ${standard.description}`}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0"
                  />
                </div>
                {/* Learning Standards under each Content Standard */}
                <LearningStandardsList 
                  standards={[
                    { code: `${standard.code}.1`, description: `Demonstrate understanding of ${standard.description.toLowerCase()}` },
                    { code: `${standard.code}.2`, description: `Apply ${standard.description.toLowerCase()} in familiar contexts` },
                    { code: `${standard.code}.3`, description: `Use appropriate strategies for ${standard.description.toLowerCase()}` },
                  ]} 
                  skillName={skillName}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderGrammar = () => (
    <div className="space-y-0.5">
      {formData.grammar.map((item, index) => (
        <div key={index} className="flex items-start gap-2 group p-1.5 rounded hover:bg-muted/50">
          <span className="text-xs text-muted-foreground w-5 flex-shrink-0">{index + 1}</span>
          <span className="text-sm leading-relaxed flex-1">{item}</span>
          <CopyButton 
            text={item}
            className="opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );

  const renderVocabulary = () => (
    <div className="space-y-2">
      {Object.entries(formData.vocabulary).map(([category, words]) => (
        <div key={category} className="border rounded">
          <div className="bg-muted/30 px-2 py-1.5 flex items-center justify-between">
            <span className="text-sm font-medium">{category}</span>
            <div className="flex items-center gap-1">
              <CopyButton text={words.join(', ')} />
              <CopyAllButton 
                text={`${category}:\n${words.join(', ')}`} 
                label="Copy" 
              />
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-wrap gap-1">
              {words.map((word, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="text-xs px-2 py-0.5 cursor-pointer hover:bg-primary/20"
                  onClick={() => navigator.clipboard.writeText(word)}
                >
                  {word}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTextTypes = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
      {formData.textTypes.map((type, index) => (
        <div key={index} className="flex items-center justify-between p-2 rounded border hover:border-primary/30 group">
          <span className="text-sm">{type}</span>
          <CopyButton text={type} className="opacity-0 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-4 lg:grid-cols-8 h-9 p-0.5">
        <TabsTrigger value="listening" className="text-xs px-1 gap-1 data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700">
          {skillIcons['Listening']}
          <span className="hidden sm:inline">Listen</span>
        </TabsTrigger>
        <TabsTrigger value="speaking" className="text-xs px-1 gap-1 data-[state=active]:bg-red-100 data-[state=active]:text-red-700">
          {skillIcons['Speaking']}
          <span className="hidden sm:inline">Speak</span>
        </TabsTrigger>
        <TabsTrigger value="reading" className="text-xs px-1 gap-1 data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
          {skillIcons['Reading']}
          <span className="hidden sm:inline">Read</span>
        </TabsTrigger>
        <TabsTrigger value="writing" className="text-xs px-1 gap-1 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
          {skillIcons['Writing']}
          <span className="hidden sm:inline">Write</span>
        </TabsTrigger>
        <TabsTrigger value="literature" className="text-xs px-1 gap-1 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
          {skillIcons['Literature in Action']}
          <span className="hidden sm:inline">Lit</span>
        </TabsTrigger>
        <TabsTrigger value="grammar" className="text-xs px-1 gap-1">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">Grammar</span>
        </TabsTrigger>
        <TabsTrigger value="vocabulary" className="text-xs px-1 gap-1">
          <Library className="h-4 w-4" />
          <span className="hidden sm:inline">Vocab</span>
        </TabsTrigger>
        <TabsTrigger value="texttypes" className="text-xs px-1 gap-1">
          <FileText className="h-4 w-4" />
          <span className="hidden sm:inline">Texts</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="listening" className="mt-2">
        <Card className="border border-yellow-200 dark:border-yellow-800">
          <CardHeader className="py-2 px-3 bg-yellow-50/50 dark:bg-yellow-900/10 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-yellow-700">Listening Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Listening')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Listening')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="speaking" className="mt-2">
        <Card className="border border-red-200 dark:border-red-800">
          <CardHeader className="py-2 px-3 bg-red-50/50 dark:bg-red-900/10 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-red-700">Speaking Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Speaking')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Speaking')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reading" className="mt-2">
        <Card className="border border-green-200 dark:border-green-800">
          <CardHeader className="py-2 px-3 bg-green-50/50 dark:bg-green-900/10 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-green-700">Reading Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Reading')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Reading')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="writing" className="mt-2">
        <Card className="border border-blue-200 dark:border-blue-800">
          <CardHeader className="py-2 px-3 bg-blue-50/50 dark:bg-blue-900/10 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-blue-700">Writing Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Writing')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Writing')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="literature" className="mt-2">
        <Card className="border border-purple-200 dark:border-purple-800">
          <CardHeader className="py-2 px-3 bg-purple-50/50 dark:bg-purple-900/10 flex flex-row items-center justify-between">
            <span className="text-sm font-medium text-purple-700">Literature in Action Standards</span>
            <CopyAllButton text={getAllStandardsText(formData, 'Literature in Action')} label="Copy All" />
          </CardHeader>
          <CardContent className="p-2">
            {renderStandards('Literature in Action')}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="grammar" className="mt-2">
        <Card className="border">
          <CardHeader className="py-2 px-3 flex flex-row items-center justify-between">
            <span className="text-sm font-medium">Grammar Topics</span>
            <CopyAllButton text={getAllGrammarText(formData)} label="Copy All Grammar" />
          </CardHeader>
          <CardContent className="p-2">
            {renderGrammar()}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="vocabulary" className="mt-2">
        <Card className="border">
          <CardHeader className="py-2 px-3 flex flex-row items-center justify-between">
            <span className="text-sm font-medium">Vocabulary by Category</span>
            <CopyAllButton text={getAllVocabularyText(formData)} label="Copy All Vocab" />
          </CardHeader>
          <CardContent className="p-2">
            {renderVocabulary()}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="texttypes" className="mt-2">
        <Card className="border">
          <CardHeader className="py-2 px-3 flex flex-row items-center justify-between">
            <span className="text-sm font-medium">Suggested Text Types</span>
            <CopyAllButton text={getAllTextTypesText(formData)} label="Copy All Types" />
          </CardHeader>
          <CardContent className="p-2">
            {renderTextTypes()}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
