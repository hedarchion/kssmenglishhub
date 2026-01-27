import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface FormSelectorProps {
  selectedForms: number[];
  onFormSelect: (form: number) => void;
  maxSelection?: number;
}

export function FormSelector({ selectedForms, onFormSelect, maxSelection = 5 }: FormSelectorProps) {
  const forms = [1, 2, 3, 4, 5];

  const getCEFRLevel = (form: number) => {
    const levels: Record<number, string> = {
      1: 'A2 Mid',
      2: 'A2 High',
      3: 'B1 Low',
      4: 'B1 Mid',
      5: 'B1 High'
    };
    return levels[form];
  };

  return (
    <Card className="border">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Select Form(s)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {forms.map((form) => {
            const isSelected = selectedForms.includes(form);
            const canSelect = selectedForms.length < maxSelection || isSelected;
            
            return (
              <Button
                key={form}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => onFormSelect(form)}
                disabled={!canSelect && !isSelected}
                className={`h-12 px-3 transition-all ${isSelected ? 'shadow-sm' : ''}`}
              >
                <div className="flex flex-col items-center leading-tight">
                  <span className="font-semibold">Form {form}</span>
                  <span className={`text-xs ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {getCEFRLevel(form)}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {selectedForms.length === 0 ? 'Select at least one form' : `${selectedForms.length} form(s) selected`}
        </p>
      </CardContent>
    </Card>
  );
}
