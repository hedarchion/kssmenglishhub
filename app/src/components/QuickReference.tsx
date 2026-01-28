import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CopyButton } from './CopyButton';
import { CopyAllButton } from './CopyAllButton';
import { Lightbulb, Target, Users, BookOpen, Zap } from 'lucide-react';
import { crossCurricularElements, pupilsProfile, hotsLevels } from '@/data/curriculumData';

export function QuickReference() {
  const getAllPupilsProfileText = () => {
    return `Pupils' Profile:\n\n${pupilsProfile.map(p => `${p.name}: ${p.description}`).join('\n\n')}`;
  };

  const getAllHotsText = () => {
    return `HOTS Levels:\n\n${hotsLevels.map(h => `${h.level}: ${h.description}`).join('\n\n')}`;
  };

  const getAllCrossCurricularText = () => {
    return `Cross-Curricular Elements:\n\n${crossCurricularElements.join('\n')}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="border">
        <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            Pupils' Profile
          </CardTitle>
          <CopyAllButton text={getAllPupilsProfileText()} label="Copy All" />
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="space-y-1">
            {pupilsProfile.map((profile, index) => (
              <div key={index} className="group flex items-start gap-3 p-2.5 rounded hover:bg-muted/50">
                <Badge className="text-xs px-2.5 py-0.5 h-6 flex-shrink-0">{profile.name}</Badge>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{profile.description}</p>
                <CopyButton 
                  text={`${profile.name}: ${profile.description}`}
                  className="opacity-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            HOTS Levels
          </CardTitle>
          <CopyAllButton text={getAllHotsText()} label="Copy All" />
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="space-y-1">
            {hotsLevels.map((level, index) => (
              <div key={index} className="group flex items-start gap-3 p-2.5 rounded hover:bg-muted/50">
                <Badge variant="secondary" className="text-xs px-2.5 py-0.5 h-6 flex-shrink-0">{level.level}</Badge>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{level.description}</p>
                <CopyButton 
                  text={`${level.level}: ${level.description}`}
                  className="opacity-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border lg:col-span-2">
        <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-primary" />
            Cross-Curricular Elements
          </CardTitle>
          <CopyAllButton text={getAllCrossCurricularText()} label="Copy All" />
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex flex-wrap gap-2">
            {crossCurricularElements.map((element, index) => (
              <div key={index} className="group">
                <Badge variant="outline" className="text-sm px-3 py-1.5 flex items-center gap-1.5 hover:bg-primary/10">
                  {element}
                  <CopyButton text={element} />
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border lg:col-span-2">
        <CardHeader className="py-3 px-4">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-primary" />
            Four Main Themes
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "People and Culture",
              "Health and Environment",
              "Science and Technology",
              "Consumerism and Financial Awareness"
            ].map((theme, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded border hover:border-primary/30 group">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="text-sm">{theme}</span>
                </div>
                <CopyButton text={theme} className="opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
